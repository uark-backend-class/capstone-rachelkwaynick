import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostdataService } from '../../shared/services/postdata.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {


  constructor(private dataService: PostdataService){}
   


  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),

  });

  Url = '/api/registerUser';


  

   onSubmit() {
    let firstName = this.registerForm.get('firstName').value;
    let lastName = this.registerForm.get('lastName').value;
    let email = this.registerForm.get('email').value;
    let password = this.registerForm.get('password').value;



    this.dataService.postData(this.Url, {firstName, lastName, email, password})
      .subscribe(console.log)
  }

  ngOnInit() {
  }

}