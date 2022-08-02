import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChooseParkingPage } from './dashboard/pages/choose-parking/choose-parking.page';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login-student',
    loadChildren: () => import('./pages/login-student/login-student.module').then( m => m.LoginStudentPageModule)
  },
  {
    path: 'student-dashboard',
    loadChildren: () => import('./dashboard/student-menu/student-menu.module').then(m => m.StudentMenuPageModule),
    
  },
  {
  
        path: 'choose-parking/:id',
        component:ChooseParkingPage
    },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./pages/admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'admin-menu',
    loadChildren: () => import('./admin/admin-menu/admin-menu.module').then( m => m.AdminMenuPageModule)
  },
  {
    path: 'admin-menu/add-user',
    loadChildren: () => import('./admin/add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'admin-menu/manage-users',
    loadChildren: () => import('./admin/manage-user/manage-user.module').then( m => m.ManageUserPageModule)
  },
  {
    path: 'admin-menu/add-slots',
    loadChildren: () => import('./admin/add-slots/add-slots.module').then( m => m.AddSlotsPageModule)
  },
  {
    path: 'manage-slots',
    loadChildren: () => import('./admin/manage-slots/manage-slots.module').then( m => m.ManageSlotsPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
