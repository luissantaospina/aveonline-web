import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {LoginService} from './login.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(
    private api:LoginService,
    private router:Router
  ) { }

  errorStatus:boolean = false

  ngOnInit(): void {
  }

  onLogin(form: any) {
    this.api.login(form).subscribe(data =>{
      if (data.status == "ok"){
        localStorage.setItem("token", data.response)
        this.router.navigate(['dashboard'])
      } else {
        this.errorStatus = true
      }
    })
  }
}
