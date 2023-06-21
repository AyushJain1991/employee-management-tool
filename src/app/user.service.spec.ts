import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { UserService } from './user.service';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('UserService', () => {
  let service: UserService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot(provideMockStore)
      ],
      providers: [provideMockStore({})]  
    });
    service = TestBed.inject(UserService);
    service = new UserService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users', async(() => {
      const email = "ayush.jain5@ibm.com";
      service.setUserEmail(email);
      service.getUserEmail().subscribe(users => {
      expect(users).toBe(email)
    })
  }));

  it('should get users', async(() => {
    const role = "admin";
    service.setUserRole(role);
    service.getUserRole().subscribe(users => {
    expect(users).toBe(role)
  });
}))

});
