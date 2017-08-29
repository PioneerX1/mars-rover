import { RoverFormComponent } from './rover-form/rover-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RoverFormComponent
  },
  {
    path: 'user/photos',
    component: UserPhotosListComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
