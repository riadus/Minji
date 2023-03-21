import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";
import { GameService } from "src/app/services/game.service";
import * as GameActions from "../actions/game.actions";
import { getGameState } from "../selectors/game.selectors";

@Injectable()
export class GameEffects {
    constructor(private actions$: Actions,
        private store: Store,
        private gameService: GameService
    ) { }

    newGame$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(GameActions.newGame),
            mergeMap(_ => this.gameService.newGame().pipe(
                map(gameId => GameActions.newGameSuccess({ id: gameId })),
                catchError(error => of(GameActions.newGameFailure({ error })))
            ))
        )}
    );

    nextHint$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(GameActions.nextHint),
            withLatestFrom(this.store.pipe(select(getGameState))),
            switchMap(([_, gameState]) => this.gameService.nextHint(gameState).pipe(
                map(result => GameActions.nextHintSuccess(result)),
                catchError(error => of(GameActions.nextHintFailure({ error })))
            ))
        )}
    );

}