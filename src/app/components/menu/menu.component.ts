import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/app-state/actions/user.actions';
import { AppState } from 'src/app/app-state/reducers';
import { isAuthorized } from 'src/app/app-state/selectors/user.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isAuthorized$?: Observable<boolean>;


  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isAuthorized$ = this.store.select(isAuthorized);

  }

  logout(): void {
    this.store.dispatch(logout())
  }


}
