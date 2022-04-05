import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ThreadsComponent } from './threads/threads.component';
import { CommentsComponent } from './comments/comments.component';
import { HeaderComponent } from './_common/header/header.component';
import { LoadingComponent } from './_common/loading/loading.component';
import { CommentComponent } from './comments/comment/comment.component';
import { SummaryComponent } from './comments/summary/summary.component';
import { AboutComponent } from './about/about.component';
import { ScrollToTopComponent } from './_common/scroll-to-top/scroll-to-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ThreadsComponent },
  { path: 'comments/:id', component: CommentsComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentComponent,
    ThreadsComponent,
    HeaderComponent,
    LoadingComponent,
    SummaryComponent,
    AboutComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
