import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsListComponent} from './components/posts-list/posts-list.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import PostResolver from './resolvers/post.resolver';
import {PostsRouterComponent} from './components/posts-router/posts-router.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import UsersResolver from './resolvers/users.resolver';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'posts'},
  {
    path: 'posts', component: PostsRouterComponent,
    children: [
      {path: '', component: PostsListComponent, pathMatch: 'full'},
      {path: ':id', component: PostDetailsComponent, resolve: {post: PostResolver}, pathMatch: 'full'},
      {path: '**', redirectTo: 'posts'}
    ]
  },
  {path: 'users', pathMatch: 'full', component: UsersListComponent, resolve: {users: UsersResolver}},
  {path: '**', pathMatch: 'full', redirectTo: 'posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
