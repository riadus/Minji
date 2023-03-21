import { createReducer, on, props } from "@ngrx/store";
import { Team, GameState, Nationality, Player, PlayerBirthDetails, PlayerPhysicalDetails, TeamDetails, Transfer } from "../models/flag-hint";
import * as GameActions from "../actions/game.actions";

export const initialNationality : Nationality = {
    country: '',
    code: ''
}

export const initialPlayerPhysicalDetails : PlayerPhysicalDetails = {
    height: '',
    weight: ''
}

export const initialPlayerBirthDetails : PlayerBirthDetails = {
    placeOfBirth: '',
    countyOfBirth: '',
    dateOfBirth: new Date()
}

const initialPlayer : Player = {
    teams: [],
    physicalDetails: initialPlayerPhysicalDetails,
    nationality: initialNationality,
    position: '',
    birthDetails: initialPlayerBirthDetails,
    image: '',
    name: ''
}

export const initialGameState: GameState = {
    playerToGuess: initialPlayer,
    id: '',
    step: 0,
    maxHints: 0
};

export const gameReducer = createReducer(initialGameState, 
    on(GameActions.nextHintSuccess, (state: GameState, props) => {
        return {
            ...state,
            playerToGuess: {
                ...state.playerToGuess,
                birthDetails: props.playerToGuess.birthDetails ?? state.playerToGuess.birthDetails,
                image: props.playerToGuess.image ?? state.playerToGuess.image,
                name: props.playerToGuess.name ?? state.playerToGuess.name,
                nationality: props.playerToGuess.nationality ?? state.playerToGuess.nationality,
                physicalDetails: props.playerToGuess.physicalDetails ?? state.playerToGuess.physicalDetails,
                position: props.playerToGuess.position ?? state.playerToGuess.position,
                teams: props.playerToGuess.teams.length > 0 ? props.playerToGuess.teams : state.playerToGuess.teams
            },
            step: props.step,
            id: props.id
        }
    }),
    on(GameActions.newGameSuccess, (state: GameState,  props) => {
        
        return {
            ...state,
            playerToGuess: {
                ...state.playerToGuess,
                teams: [],
                physicalDetails: initialPlayerPhysicalDetails,
                nationality: initialNationality,
                position: '',
                birthDetails: initialPlayerBirthDetails,
                image: '',
                name: ''
            },
            step: 0,
            id: props.id
            }
        }
    )
);
