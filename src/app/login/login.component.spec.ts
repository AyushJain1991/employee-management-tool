import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminComponent } from '../admin/admin.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let router: Router;
  let mockRouter: any;

  beforeEach(async () => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        RouterTestingModule.withRoutes([
          {path : 'user', component : UserDetailsComponent},
          { path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) }
        ]),
        StoreModule.forRoot(provideMockStore)
      ],
      providers: [ { provide: Router, useValue: mockRouter },
        provideMockStore({})]  
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      router = TestBed.inject(Router);
      // de = fixture.debugElement.query(By.css('form'));
      // el = de.nativeElement;
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // it('should set submitted to true', () => {
  //   const component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   component.onSubmit(component.myForm);
  //   expect(mockRouter.navigate).toHaveBeenCalledWith(['']);
  //   expect(component.submitted).toBeTruthy();
  // });

  // it('should call the onSubmit method', () => {
  //   fixture.detectChanges();
  //   spyOn(component, 'onSubmit');
  //   el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   el.click();
  //   expect(component.onSubmit).toHaveBeenCalledTimes(0);
  // });

  it('form should be invalid', () => {
    component.myForm.controls['email'].setValue('');
    component.myForm.controls['password'].setValue('');
    expect(component.myForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.myForm.controls['email'].setValue('ayush.jain5@ibm.com');
    component.myForm.controls['password'].setValue('123456');
    expect(component.myForm.valid).toBeTruthy();
  });
});