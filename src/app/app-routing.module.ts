import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "/login", pathMatch:"full"},
  {path: "",
  canActivate: [AuthGuard],
  loadChildren: () =>
    import("./modules/admin/admin.module").then((m)=> m.AdminModule)},
  {path: "**", component: LoginComponent}
];




// @NgModule({
//   imports: [RouterModule.forRoot(routes, { enableTracing: true })],
//   exports: [RouterModule]
// })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
