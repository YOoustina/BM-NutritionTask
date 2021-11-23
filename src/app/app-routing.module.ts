import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngrComponent } from './nutrition/add-ingr/add-ingr.component';
import { SummaryComponent } from './nutrition/summary/summary.component';

const routes: Routes = [
  {path: '', component: AddIngrComponent},
  {path: 'summary', component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
