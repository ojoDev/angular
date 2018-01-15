import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server-resolver.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent}, // localhost:4200
    { path: 'users', component: UsersComponent, children: [ // localhost:4200/users
      { path: ':id/:name', component: UserComponent}, // localhost:4200/users/[id]/[name]
    ]},
    { path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [ // localhost:4200/servers
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} }, // localhost:4200/servers/[id]
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]} // localhost:4200/servers/[id]/edit
    ]},
    // { path: 'not-found', component: PageNotFoundComponent}, // ERRORS
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}}, // ERRORS
    { path: '**', redirectTo: 'not-found'} // ERRORS
  ];

@NgModule( {
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}