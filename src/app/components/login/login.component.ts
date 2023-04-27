import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { LoginCredential } from '../../models/credential';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/app/app-state/actions/user.actions';

@Component({
  selector: 'app-login',
  styleUrls: ['login.component.css'],
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showSpinner: boolean = false;

  constructor(private service: BackendService, private router: Router, private store: Store) {

  }

  submit() {
    const data: LoginCredential = { 'email': this.username, 'pin': this.password };

    this.store.dispatch(login({ credential: data }));

    

  }

}
