import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../reducers";

export const selectUserState = (state: AppState) => state.userState;

export const getAccessToken = createSelector(
  selectUserState,
  (state) => state.user.accessToken
);


export const isAuthorized = createSelector(
  selectUserState,
  (state) => state.isAuthorized
)




