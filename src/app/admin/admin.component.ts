import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  tabName: string = "Reports";

  constructor(private router: Router) {}

  ngOnInit() {
  }
  
  switchTab(tabName: string){
    this.tabName = tabName;
    if (tabName === 'Reports'){
      this.router.navigateByUrl('/admin/reports');
    } else {
      this.router.navigateByUrl('/admin/record');
    }
  }

  ngOnDestroy() {
  }
}
