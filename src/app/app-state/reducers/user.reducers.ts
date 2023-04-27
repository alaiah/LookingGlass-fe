import { Action, createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout } from '../actions/user.actions';
import { User } from 'src/app/models/user';


export interface UserState {
  user: User;
  message: any;
  isAuthorized: boolean;

}

const junk: User = {
  id: 0, firstName: '', lastName: '', email: '', isAdmin: false, accessToken: '', practiceId: 0
}

const initialState: UserState =  {
  user: junk,
  message: '',
  isAuthorized: false
};

const _userReducer = createReducer(
  initialState,
  on(login, (state) => {
    return {
      ...state
    }
  }),

  on(loginSuccess, (state, user) => {
    
    return {
      ...state,
      user,
      isAuthorized: true
    }
  }),

  on(loginFailure, (state, message) => {
    
    return {
      ...state,
      message
    }
  }),

  on(logout, (state) => {

    return {
      ...initialState,

    }
  })
  
  
);

export function userReducer(state: UserState, action: Action) {
  return _userReducer(state, action);
}

