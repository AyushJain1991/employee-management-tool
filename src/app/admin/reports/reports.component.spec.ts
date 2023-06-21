import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, select } from '@ngrx/store';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReportsComponent } from './reports.component';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserModule } from '@angular/platform-browser';
import { getUsers } from 'src/app/user.selector';
import { setData } from 'src/app/user.actions';

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsComponent ],
      imports: [
        BrowserModule,
        HttpClientTestingModule,
        StoreModule.forRoot(provideMockStore)
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
