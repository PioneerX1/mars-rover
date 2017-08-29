import { RoverFormComponent } from './rover-form/rover-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    component: RoverFormComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
