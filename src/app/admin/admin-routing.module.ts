import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component'; 
import { ReportsComponent } from './reports/reports.component';
import { RecordsComponent } from './records/records.component';

const routes: Routes = [
 { path: '', component: AdminComponent, children: [
 { path: 'report', component: ReportsComponent },
 { path: 'record', component: RecordsComponent },
 {path: '**', redirectTo: 'report'}
 ]}
]; 

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
}) 
export class AdminRoutingModule { }

