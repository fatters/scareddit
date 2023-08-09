import { ApplicationRef, ErrorHandler, Injectable, OnDestroy } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { Subject, concat, from, interval } from 'rxjs';
import { filter, first, switchMap, takeUntil, tap } from 'rxjs/operators';

@Injectable({ 
  providedIn: 'root' 
})
export class ServiceWorkerService implements OnDestroy {
  private checkInterval = 1000 * 60 * 60 * 2;  // 2 hours
  private unsubscribe$ = new Subject<void>();

  constructor(private appRef: ApplicationRef,
              private swUpdate: SwUpdate,
              private errorHandler: ErrorHandler) {} 

  start(): void {
    if (!this.swUpdate.isEnabled) {
      return;
    }

    this.checkForUpdate();
    this.activateUpdate();
    this.handleUnrecoverableState();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private checkForUpdate(): void {
    const appIsStable = this.appRef.isStable.pipe(first(v => v));
    concat(appIsStable, interval(this.checkInterval))
      .pipe(
        tap(() => console.log('Checking for update...')),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(() => this.swUpdate.checkForUpdate());
  }

  private activateUpdate(): void {
    this.swUpdate.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        tap(evt => console.log(`Update available: ${JSON.stringify(evt)}`)),
        takeUntil(this.unsubscribe$),
        switchMap(() => from(this.swUpdate.activateUpdate()))
      )
      .subscribe((isActivated) => {
        if (isActivated) {
          console.log('Update activated');
          location.reload();
        }
      });
  }

  private handleUnrecoverableState(): void {
    this.swUpdate.unrecoverable
        .pipe(
            tap(evt => {
              const errorMsg = `Unrecoverable state: ${evt.reason}`;
              this.errorHandler.handleError(errorMsg);
              console.log(`${errorMsg}\nReloading...`);
            }),
            takeUntil(this.unsubscribe$),
        )
        .subscribe(() => location.reload());  
  }
}