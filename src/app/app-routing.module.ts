import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { preventsUnsavedChangesGuard } from './_guards/prevents-unsaved-changes.guard';
import { memberDetailedResolver } from './_resolvers/member-detailed.resolver';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { adminGuard } from './_guards/admin.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  //A way to protect children routes
  {path: '', 
        runGuardsAndResolvers: 'always', 
        canActivate: [authGuard],
        children: [
          {path: 'members', component: MemberListComponent},
          {path: 'members', component: MemberListComponent},
          {path: 'members/:username', component: MemberDetailComponent, resolve: {member: memberDetailedResolver}},
          {path: 'lists', component: ListsComponent},
          {path: 'messages', component: MessagesComponent},
          {path: 'member/edit', component: MemberEditComponent, canDeactivate: [preventsUnsavedChangesGuard]},
          {path: 'admin', component: AdminPanelComponent, canActivate: [adminGuard]},

        ]
      }, 

  //{path: 'members', component: MemberListComponent},
  
  //A way to protect route
  //{path: 'members', component: MemberListComponent, canActivate: [authGuard]}, 
  //{path: 'members/:id', component: MemberDetailComponent},
  //{path: 'lists', component: ListsComponent},
  //{path: 'messages', component: MessagesComponent},
  {path: 'errors', component: TestErrorComponent },
  {path: 'not-found', component: NotFoundComponent },
  {path: 'server-error', component: ServerErrorComponent },
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
