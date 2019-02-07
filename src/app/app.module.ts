import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './services/courses.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostComponent } from './post/post.component';
import { HttpClient } from 'selenium-webdriver/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent} from './posts/posts.component';
import { AuthorsService } from './authors.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthorsComponent } from './authors/authors.component';
import { GithubFollowersService } from './services/github-followers.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    TitleCasePipe,
    FavoriteComponent,
    BootstrapComponent,
    InputFormatDirective,
    AuthorsComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    //PostComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:id/:username', component : GithubProfileComponent },
      { path: 'followers', component : GithubFollowersComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    AuthorsService,
    GithubFollowersService,
    //con est obj le dicmos a Angular q estoy ErrorHandler, en su lugar use esta nueva clase AppError
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
