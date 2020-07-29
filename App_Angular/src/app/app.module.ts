import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostsListComponent} from './components/posts-list/posts-list.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsRouterComponent } from './components/posts-router/posts-router.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostDetailsComponent,
    PostsRouterComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/Home/Angular/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
