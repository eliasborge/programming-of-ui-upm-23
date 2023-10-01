import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailFormComponent } from './email-reader-form/email-form/email-form.component';
import { EmailViewerComponent } from './email-reader-form/email-viewer/email-viewer.component';
import { EmailListComponent } from './email-reader-form/email-list/email-list.component';

const routes: Routes = [ { path: '', redirectTo: '/emails-list', pathMatch: 'full' },
{ path: 'emails-list', component: EmailListComponent },
{ path: 'email-form', component: EmailFormComponent },
{ path: 'email-viewer/:id', component: EmailViewerComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
