import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PostdataService } from '../shared/services/postdata.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private dataService: PostdataService){}
   


  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),

  });

  Url = '/api/registerUser';


  

   onSubmit() {
    const formData: any = new FormData();
     formData.append('firstName', this.registerForm.get('firstName').value);
     formData.append('lastName', this.registerForm.get('lastName').value);
     formData.append('email', this.registerForm.get('email').value);
     formData.append('password', this.registerForm.get('password').value);

    this.dataService.postData(this.Url, formData)
      .subscribe(console.log)
  }

  ngOnInit() {
  }

}
