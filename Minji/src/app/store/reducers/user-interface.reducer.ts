import { createReducer, on } from "@ngrx/store";
import { UserInterfaceState } from "../models/flag-hint";
import * as GameActions from "../actions/game.actions"
import { initialNationality, initialPlayerBirthDetails, initialPlayerPhysicalDetails } from "./game.reducer";

export const initialUserInterface : UserInterfaceState = {
    showBirthDetails: false,
    showName: false,
    showNationality : false,
    showPhysicalDetails: false,
    showPosition: false,
    showTeams: false,
    showImage: false,
    lastHint: false,
    gameEnded: false,
    gameRestarted: false
};

export const userInterfaceReducer = createReducer(initialUserInterface, 
    on(GameActions.nextHintSuccess, (state: UserInterfaceState, props) => {
        return {
            ...state,
            showImage: props.playerToGuess.image != '',
            showName: props.playerToGuess.name != '',
            showPosition: props.playerToGuess.position != '',
            showBirthDetails: props.playerToGuess.birthDetails != initialPlayerBirthDetails,
            showNationality: props.playerToGuess.nationality != initialNationality,
            showPhysicalDetails: props.playerToGuess.physicalDetails != initialPlayerPhysicalDetails,
            showTeams: props.playerToGuess.teams.length > 0,
            lastHint: props.step == props.maxHints,
            gameEnded: props.step > props.maxHints,
            gameRestarted: false
        }
    }),
    on(GameActions.newGame, (state: UserInterfaceState) => {
        return {
            ...state,
            showBirthDetails: false,
            showName: false,
            showNationality : false,
            showPhysicalDetails: false,
            showPosition: false,
            showTeams: false,
            showImage: false,
            lastHint: false,
            gameEnded: false,
            gameRestarted: true
        }
    }
));
