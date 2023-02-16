import { createAction, props } from "@ngrx/store";
import { HttpErrorResponse } from "@angular/common/http";
import { GameState } from "../models/flag-hint";

export const nextHint = createAction('[Next hint]');
export const nextHintSuccess = createAction('[Next hint] Success', props<GameState>());
export const nextHintFailure = createAction('[Next hint] Failure', props<{error: HttpErrorResponse }>());

export const newGame = createAction('[New game]');