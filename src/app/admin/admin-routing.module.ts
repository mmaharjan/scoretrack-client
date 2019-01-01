import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AuthGuard } from "../auth/auth.guard";
import { ViewUsersComponent } from "./view-users/view-users.component";
import { SaveGameComponent } from "./save-game/save-game.component";
import {AdminGuard} from "../auth/admin.guard";

const routes: Routes = [
  { path: 'admin_dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard, AdminGuard],
        children: [
          { path: 'view_users', component: ViewUsersComponent },
          { path: 'save_game', component: SaveGameComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
