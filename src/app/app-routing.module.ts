import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListTacheComponent} from './dashbord/list-tache/list-tache.component';
import {AddTacheComponent} from './dashbord/add-tache/add-tache.component';
import {ModifeTacheComponent} from "./dashbord/modife-tache/modife-tache.component";


const routes: Routes = [
  {path: '', component: ListTacheComponent},
  {path: 'AddTache',  component: AddTacheComponent},
  {path: 'ModifeTache',  component: ModifeTacheComponent},
  // {path: 'FilterTache',  loadChildren: () => import('./dashbord/filtere-tache/filtere-tache.module').then(m => m.FiltereTacheModule)},
  // {path: 'ModifeTache',  loadChildren: () => import('./dashbord/modife-tache/modife-tache.module').then(m => m.ModifeTacheModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
