import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getUsers } from 'src/app/user.selector';
import { State } from '../../reducers';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { setUserData } from 'src/app/user.actions';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  details$: any;
  userInfo: any[] = [];

  constructor(private store: Store<State>, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.details$ = this.store.pipe(select(getUsers));
  }

  onEdit(userDetails: any) {
    this.userService.setUserEmail(userDetails['email']);
    this.router.navigateByUrl('/user');
  }

  onDelete(userDetails: any) {
    this.getUserDetails();
    const userRecord = (JSON.parse(JSON.stringify(this.userInfo)));
    let index = userRecord.findIndex((data: any) => data.email === userDetails['email']);
    userRecord.splice(index, 1);
    this.store.dispatch(setUserData({ data: userRecord }));
  }

  getUserDetails() {
    this.store.pipe(select(getUsers)).subscribe((res) => {
      this.userInfo = res;
    })
  }
}
