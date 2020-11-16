import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    loading = false;
    errormessage = '';

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private authenticationService: AuthenticationService) { }

  // tslint:disable-next-line:typedef
    ngOnInit() {
        //  Initialize the form group
        this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();
    }

    // Getters for easy access to form fields
  // tslint:disable-next-line:typedef
    get username() { return this.loginForm.get('username'); }
  // tslint:disable-next-line:typedef
    get password() { return this.loginForm.get('password'); }

  // tslint:disable-next-line:typedef
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
          return;
        }

        this.loading = true;
        this.authenticationService.login(this.username.value, this.password.value)
          .subscribe(
            success => {
              this.router.navigate(['/']);
            },
            error => {
              this.errormessage = error.message;
              this.loading = false;
            });
    }
}
