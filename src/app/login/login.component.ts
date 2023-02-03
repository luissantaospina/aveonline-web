import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {LoginService} from './login.service'
import {Router} from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar';

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
    private _snackBar: MatSnackBar,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.checkLocalStorage()
  }

  checkLocalStorage() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['inicio/ordenes'])
    }
  }

  onLogin(form: any) {
    this.api.login(form).subscribe(
      (result: any) => {
        localStorage.setItem("token", result.access_token)
        localStorage.setItem('permissions', JSON.stringify(result.permissions))
        localStorage.setItem('user', JSON.stringify(result.user.id))
        this.router.navigate(['inicio/ordenes'])
      },
      (error) => {
        this.openSnackBar('El email y/o contraseña es incorrecto')
        this.loginForm.reset()
      }
    )
  }

  openSnackBar(message: string) {
    this._snackBar.open(
      message, '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }
}
