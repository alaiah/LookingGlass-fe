import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { isAuthorized } from './app-state/selectors/user.selectors';
import { Observable } from 'rxjs';
import { AppState } from './app-state/reducers';
import { logout } from './app-state/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lookingglass';

}
