import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { loadUsers, setData } from '../user.actions';
import { getUsers } from '../user.selector';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  myForm!: FormGroup;
  submitted = false;
  data$: any;
  // regConfig: any[] = [
  //   {
  //     type: "input",
  //     label: "Username",
  //     inputType: "text",
  //     name: "name",
  //     value: "Ayush",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Name Required"
  //       },
  //       {
  //         name: "pattern",
  //         validator: Validators.pattern("^[a-zA-Z]+$"),
  //         message: "Accept only text"
  //       }
  //     ]
  //   },
  //   {
  //     type: "input",
  //     label: "Email Address",
  //     inputType: "email",
  //     value: "ayush.jain5@ibm.com",
  //     name: "email",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Email Required"
  //       },
  //       {
  //         name: "pattern",
  //         validator: Validators.pattern(
  //           "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
  //         ),
  //         message: "Invalid email"
  //       }
  //     ]
  //   },
  //   {
  //     type: "input",
  //     label: "Password",
  //     inputType: "password",
  //     name: "password",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Password Required"
  //       }
  //     ]
  //   },
  //   {
  //     type: "radiobutton",
  //     label: "Gender",
  //     name: "gender",
  //     options: ["Male", "Female"],
  //     value: "Male"
  //   },
  //   {
  //     type: "date",
  //     label: "DOB",
  //     name: "dob",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Date of Birth Required"
  //       }
  //     ]
  //   },
  //   {
  //     type: "select",
  //     label: "Country",
  //     name: "country",
  //     value: "UK",
  //     options: ["India", "UAE", "UK", "US"]
  //   },
  //   {
  //     type: "checkbox",
  //     label: "Accept Terms",
  //     name: "term",
  //     value: true
  //   },
  //   {
  //     type: "button",
  //     label: "Save"
  //   }
  // ];
  
  //dataArray: any[];

  constructor(private fb: FormBuilder, private router: Router, private store: Store<State>,
   private userService: UserService) {}
  
  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    //this.myForm = this.createControl();
   
  }

  // createControl() {
  //   const group = this.fb.group({});
  //   this.regConfig.forEach(field => {
  //     if (field.type === "button") return;
  //     const control = this.fb.control(
  //       field.value,
  //       this.bindValidations(field.validations || [])
  //     );
  //     group.addControl(field.name, control);
  //   });
  //   return group;
  // }

  // bindValidations(validations: any) {
  //   if (validations.length > 0) {
  //     const validList: any[] = [];
  //     validations.forEach((valid: any) => {
  //       validList.push(valid.validator);
  //     });
  //     return Validators.compose(validList);
  //   }
  //   return null;
  // }

  get registerFormControl() {
    return this.myForm.controls;
  }

  onSubmit(form: FormGroup) {
    
    this.submitted = true;
    let obj = {email : form.value.email};
    this.userService.setUserEmail(form.value?.email);
    if (form.value?.email === 'admin@ibm.com'){
      this.userService.setUserRole('Admin');
      this.router.navigateByUrl('/admin');
    } else {
      this.userService.setUserRole('User');
      this.store.dispatch(setData({ data: obj }));
      this.router.navigateByUrl('/user');
    }
  }
}
