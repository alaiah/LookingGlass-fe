import { createAction, props } from "@ngrx/store"; 
import { LoginCredential } from "src/app/models/credential";

export const USER_LOGIN = '[Login Page] Login';
export const USER_LOGIN_SUCCESS = '[Login Page] Success';
export const USER_LOGIN_FAILURE = '[Login Page] Failure';
export const USER_LOGOUT = '[Login Page] Logout';

export const login = createAction(
    USER_LOGIN, 
    props<{credential: LoginCredential}>()
   );


export const loginSuccess = createAction(
    USER_LOGIN_SUCCESS,
    props<any>()
  );
  
  export const loginFailure = createAction(
    USER_LOGIN_FAILURE,
    props<{message: string}>()
  );


  export const logout = createAction(
    USER_LOGOUT
  )