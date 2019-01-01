import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {ViewUsersComponent} from './view-users/view-users.component';
import {SaveGameComponent} from './save-game/save-game.component';
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ViewUsersComponent,
    SaveGameComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
