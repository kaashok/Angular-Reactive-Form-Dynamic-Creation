import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicMatFormCreationComponent } from './components/dynamic-mat-form-creation/dynamic-mat-form-creation.component';

const routes: Routes = [
  {
    path: "", component: DynamicMatFormCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
