import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { UserDetailsComponent } from './user-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        
      ],
      providers: [provideMockStore({})]

    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(UserDetailsComponent);
      component = fixture.componentInstance;
     // de = fixture.debugElement.query(By.css('form'));
     // el = de.nativeElement;
    })

     fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', () => {
    component.detailsForm.controls['name'].setValue('');
    component.detailsForm.controls['email'].setValue('');
    component.detailsForm.controls['phoneNo'].setValue('');
    component.detailsForm.controls['gender'].setValue('');
    component.detailsForm.controls['address'].setValue('');
    component.detailsForm.controls['skills'].setValue('');
    expect(component.detailsForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.detailsForm.controls['name'].setValue('Ayush Jain');
    component.detailsForm.controls['email'].setValue('ayush.jain5@ibm.com');
    component.detailsForm.controls['phoneNo'].setValue('9536580265');
    component.detailsForm.controls['gender'].setValue('Male');
    component.detailsForm.controls['address'].setValue('351 Brahampuri Meerut');
    component.detailsForm.controls['skills'].setValue('Angular');
    expect(component.detailsForm.valid).toBeTruthy();
  });

});


