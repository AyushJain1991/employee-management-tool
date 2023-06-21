import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdminComponent } from './admin/admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReportsComponent } from './admin/reports/reports.component';
import { RecordsComponent } from './admin/records/records.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDetailsComponent,
    AdminComponent,
    ReportsComponent,
    RecordsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),   
    EffectsModule.forFeature([UserEffects]), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
    
  ],
 
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule { }
