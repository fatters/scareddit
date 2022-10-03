import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingModule } from 'src/app/components/loading/loading.module';
import { ThreadCommentComponent } from './../../components/thread-comment/thread-comment.component';
import { ThreadSummaryComponent } from './../../components/thread-summary/thread-summary.component';
import { ThreadComponent } from './thread.component';

const routes: Routes = [
  { path: '', component: ThreadComponent }
];

@NgModule({
  declarations: [
    ThreadComponent,
    ThreadSummaryComponent,
    ThreadCommentComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LoadingModule
  ]
})
export class ThreadModule {}
