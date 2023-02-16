import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GameState } from "../models/flag-hint";

const gameState = createFeatureSelector<GameState>('root');

export const getBirthDetails = createSelector(gameState, (state: GameState) => state.playerToGuess.birthDetails);
export const getNationality = createSelector(gameState, (state: GameState) => state.playerToGuess.nationality);
export const getPhysicalDetails = createSelector(gameState, (state: GameState) => state.playerToGuess.physicalDetails);
export const getTeams = createSelector(gameState, (state: GameState) => state.playerToGuess.teams);
export const getPosition = createSelector(gameState, (state: GameState) => state.playerToGuess.position);
export const getImage = createSelector(gameState, (state: GameState) => state.playerToGuess.image);
export const getName = createSelector(gameState, (state: GameState) => state.playerToGuess.name);
export const getGameState = createSelector(gameState, (state: GameState) => state);
