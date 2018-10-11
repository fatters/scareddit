import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { RouterModule, Routes } from '@angular/router';
import { ThreadsComponent } from './threads/threads.component';
import { CommentsComponent } from './comments/comments.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { CommentComponent } from './comments/comment/comment.component';
import { SummaryComponent } from './comments/summary/summary.component';
import { AboutComponent } from './about/about.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
