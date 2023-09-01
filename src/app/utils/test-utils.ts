import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export const getNativeElement = (fixture: ComponentFixture<unknown>, cssClass: string): HTMLElement | null => {
  return fixture.debugElement.query(By.css(cssClass))?.nativeElement ?? null;
};

export const getNativeElements = (fixture: ComponentFixture<unknown>, cssClass: string): HTMLElement[] => {
  return fixture.debugElement.queryAll(By.css(cssClass))?.map((debugElement) => debugElement.nativeElement) ?? [];
};
