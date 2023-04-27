import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './components/student/student.component';
import { HeadersInterceptor } from './headers.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './app-state/effects/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AssessmentTemplateComponent } from './components/assessment-template/assessment-template.component';
import { reducers } from './app-state/reducers';
import { AssessmentTemplateEffects } from './app-state/effects/assessmentTemplate.effects';
import { StudentEffects } from './app-state/effects/student.effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
 


@NgModule({
  declarations: [AppComponent, LoginComponent, StudentComponent, AssessmentTemplateComponent, MenuComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    RouterModule.forRoot ([
      { path: '', redirectTo: '/', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'students', component: StudentComponent},
      { path: 'assessments', component: AssessmentTemplateComponent},
    ]),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([LoginEffects, StudentEffects, AssessmentTemplateEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
   ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
