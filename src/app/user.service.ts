import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>(''); 
  user = this.userEmail.asObservable();
  private userRole: BehaviorSubject<string> = new BehaviorSubject<string>(''); 
  role = this.userRole.asObservable();
  constructor() { }
 // constructor() { }
//  public get(): Observable<any> {
//   return this.http.get('https://reqres.in/api/userse?page=1');
// }

setUserEmail(email: string):void {
  this.userEmail.next(email);
}

getUserEmail(): BehaviorSubject<string> {
  return this.userEmail;
}

setUserRole(role: string):void {
  this.userRole.next(role);
}

getUserRole(): BehaviorSubject<string> {
  return this.userRole;
}

// public get1(): Observable<any> {
//   return this.http.get('https://.in/api/userse?page=1').pipe(map((res)=>(res)),catchError(error => of(error)));
// }
}



