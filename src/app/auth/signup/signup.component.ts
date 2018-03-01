import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
// *** ^^ required for ngrx

import { AuthService } from '../auth.service';
import { UIService } from '../../shared/ui.service';
import * as fromRoot from '../../app.reducer';
// *** ^^ required for ngrx

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    maxDate;
    isLoading$: Observable<boolean>;

    constructor(
        private authService: AuthService,
        private uiService: UIService,
        private store: Store<fromRoot.State>
        // *** ^^ required for ngrx - store is generic and must be passed a type.
        // In this case the type is State which is a combination of all reducer states
    ) { }

    ngOnInit() {
        this.isLoading$ = this.store.select(fromRoot.getIsLoading);
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }

    onSubmit(form: NgForm) {
        this.authService.registerUser({
            email: form.value.email,
            password: form.value.password
        });
    }
}
