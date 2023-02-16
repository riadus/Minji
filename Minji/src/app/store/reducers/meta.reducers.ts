import { MetaReducer, ActionReducer } from "@ngrx/store";

export const metaReducers: MetaReducer[] = [logConsole];

function logConsole(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        const currentState = reducer(state, action);

        console.groupCollapsed(action.type);
        console.log('Etat précédent : ', state);
        console.log('Action : ', action);
        console.log('Etat suivant : ', currentState);
        console.groupEnd();

        return currentState;
    }
}