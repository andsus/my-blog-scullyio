import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';

const routes: Routes = [{ path: '', component: ArticlesComponent }];
// RouterModule.forChild is used in feature modules, 
// RouterModule.forRoot is used in main app module
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
