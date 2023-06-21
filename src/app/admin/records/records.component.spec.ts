import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { RecordsComponent } from './records.component';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserModule } from '@angular/platform-browser';

describe('RecordsComponent', () => {
  let component: RecordsComponent;
  let fixture: ComponentFixture<RecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsComponent ],
      imports: [
        BrowserModule,
        HttpClientTestingModule,
        StoreModule.forRoot(provideMockStore)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
