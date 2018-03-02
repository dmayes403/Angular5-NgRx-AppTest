import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
// ^^ rxjs 6.0+ doesn't require /Observable, rxjs alone will work
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
// *** ^^ required for ngrx

import { AuthService } from '../auth.service';
import { UIService } from '../../shared/ui.service';
import * as fromRoot from '../../app.reducer';
// *** ^^ required for ngrx

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    isLoading$: Observable<boolean>;
    // ^^ use $ at the end of variables that are controlled by ngrx

    constructor(
        private authService: AuthService,
        private uiService: UIService,
        private store: Store<fromRoot.State>
        // *** ^^ required for ngrx
    ) { }

    ngOnInit() {
        this.isLoading$ = this.store.select(fromRoot.getIsLoading);
        // *** ^^ required for ngrx - this returns an observable which is unwrapped by the
        // async keyword. This access the selector created in app.reducer.
        this.loginForm = new FormGroup({
            email: new FormControl('', {
                validators: [Validators.required, Validators.email]
            }),
            password: new FormControl('', { validators: [Validators.required] })
        });
    }

    onSubmit() {
        this.authService.login({
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        });
    }
}
