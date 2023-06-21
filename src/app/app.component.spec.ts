import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';


describe('AppComponent', () => {
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;
  let mockRouter: any;

  beforeEach(async () => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        RouterTestingModule,
        RouterTestingModule.withRoutes([
          { path: '', component: LoginComponent }
        ]),
        StoreModule.forRoot(provideMockStore)
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: Router, useValue: mockRouter },
        UserService,
        provideMockStore({})]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);
  });

  it('should go home', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    component.logout();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['']);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Employee Managment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Employee Managment');
  });

});
