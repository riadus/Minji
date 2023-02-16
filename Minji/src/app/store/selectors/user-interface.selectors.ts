import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserInterfaceState } from "../models/flag-hint";

const userInterface = createFeatureSelector<UserInterfaceState>('user-interface');

export const getShowNationality = createSelector(userInterface, (state: UserInterfaceState) => state.showNationality);
export const getShowTeams = createSelector(userInterface, (state: UserInterfaceState) => state.showTeams);
export const getShowPosition = createSelector(userInterface, (state: UserInterfaceState) => state.showPosition);
export const getShowBirthDetails = createSelector(userInterface, (state: UserInterfaceState) => state.showBirthDetails);
export const getShowImage = createSelector(userInterface, (state: UserInterfaceState) => state.showImage);
export const getShowName = createSelector(userInterface, (state: UserInterfaceState) => state.showName);
export const getShowPhysicalDetails = createSelector(userInterface, (state: UserInterfaceState) => state.showPhysicalDetails);
export const getIsLastHint = createSelector(userInterface, (state: UserInterfaceState) => state.lastHint);
export const getIsGameEnded = createSelector(userInterface, (state: UserInterfaceState) => state.gameEnded);
export const getIsGameRestarted = createSelector(userInterface, (state: UserInterfaceState) => state.gameRestarted);
