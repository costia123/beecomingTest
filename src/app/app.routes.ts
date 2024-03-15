import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MapComponent, pathMatch: 'full' },
  { path: 'data', component: DataComponent, pathMatch: 'full' },
];
