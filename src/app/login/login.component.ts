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
    nombre : new FormControl('', Validators.required),
    clave : new FormControl('', Validators.required)
  })

  constructor(
    private api:LoginService,
    private router:Router
  ) { }

  errorStatus:boolean = false

  ngOnInit(): void {
    // this.checkLocalStorage()
  }

  checkLocalStorage() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['home'])
    }
  }

  onLogin(form: any) {
    this.api.login(form).subscribe(data =>{
      if (data.status == "ok"){
        localStorage.setItem("token", data.token)
        this.router.navigate(['home'])
      } else {
        this.errorStatus = true
      }
    })
  }
}
