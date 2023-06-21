import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { getUsers } from '../user.selector';
import { setUserData } from '../user.actions';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  faCoffee = faCoffee;
  detailsForm!: FormGroup;
  submitted = false;
  unamePattern = "[a-zA-Z][a-zA-Z ]+";
  // pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  userEmailId:any;
  data$:any;
  userData: any[] = [];
  isEditable: boolean = false;
  role: string ='';


  constructor(private fb: FormBuilder, private router: Router, private userService: UserService,
    private store: Store<State>) {}
    
  ngOnInit() {
     this.userService.getUserRole().subscribe((res)=>{
        this.role = res;
     });
  
    this.detailsForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      phoneNo: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      skills: ['', [Validators.required]]
    });

    this.userService.getUserEmail().subscribe(email => {
      this.userEmailId = email;
      // this.detailsForm.patchValue({
      //   email: email
      // });
    });
    this.data$ = this.store.pipe(select(getUsers));
     this.data$.subscribe((res: any)=>{
      this.userData = res;
      let index = this.userData.findIndex(data => data.email === this.userEmailId);
      const userDetails = JSON.parse(JSON.stringify(this.userData));
       this.detailsForm.patchValue({
         name: userDetails[index]['name'],
         email: userDetails[index]['email'],
         phoneNo: userDetails[index]['phoneNo'],
         gender: userDetails[index]['gender'],
         address: userDetails[index]['address'],
         skills: userDetails[index]['skills']
       });
    }); 
  }

  onEdit(){
    this.isEditable = true;
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    let index = this.userData.findIndex(data => data.email === this.userEmailId);
    const userDetails = JSON.parse(JSON.stringify(this.userData));
    userDetails[index]['name'] = form.value?.name;
    userDetails[index]['email'] = form.value?.email;
    userDetails[index]['phoneNo'] = form.value?.phoneNo;
    userDetails[index]['gender'] = form.value?.gender;
    userDetails[index]['address'] = form.value?.address;
    userDetails[index]['skills'] = form.value?.skills;
    this.store.dispatch(setUserData({ data:  userDetails}));
    if (this.role === 'Admin'){
      this.router.navigateByUrl('/admin');
    } else {
      this.isEditable = false;
    }
  }
}
