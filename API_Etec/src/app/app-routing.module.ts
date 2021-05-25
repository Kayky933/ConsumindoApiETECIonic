import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'get-all-tasks',
    loadChildren: () => import('./Pages/Tasks/get-all/get-all.module').then( m => m.GetAllPageModule)
  },
  {
    path: 'get-one-tasks',
    loadChildren: () => import('./Pages/Tasks/get-one/get-one.module').then( m => m.GetOnePageModule)
  },
  {
    path: 'post-tasks',
    loadChildren: () => import('./Pages/Tasks/post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'put-tasks',
    loadChildren: () => import('./Pages/Tasks/put/put.module').then( m => m.PutPageModule)
  },
  {
    path: 'delet-tasks',
    loadChildren: () => import('./Pages/Tasks/delet/delet.module').then( m => m.DeletPageModule)
  },
  {
    path: 'home-tasks',
    loadChildren: () => import('./Pages/Tasks/home-tasks/home-tasks.module').then( m => m.HomeTasksPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
