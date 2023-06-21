import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Employee Managment';
  faCoffee = faCoffee;
  constructor(public router: Router) {}
  
  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['']);
  }
}
