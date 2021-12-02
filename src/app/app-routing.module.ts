import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./paginas/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./paginas/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'event-create',
    loadChildren: () => import('./paginas/event-create/event-create.module').then( m => m.EventCreatePageModule)
  },
  {
    path: 'event-detail/:id',
    loadChildren: () => import('./paginas/event-detail/event-detail.module').then( m => m.EventDetailPageModule)
  },
  {
    path: 'event-list',
    loadChildren: () => import('./paginas/event-list/event-list.module').then( m => m.EventListPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
