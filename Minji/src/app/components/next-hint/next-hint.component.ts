import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import * as UserInterfaceSelectors from "../../store/selectors/user-interface.selectors"
import * as GameActions from "../../store/actions/game.actions"

@Component({
  selector: 'app-next-hint',
  templateUrl: './next-hint.component.html',
  styleUrls: ['./next-hint.component.css']
})
export class NextHintComponent implements OnInit, OnDestroy {
  public buttonText = '';
  private isLastHint = false;
  private gameEnded = false;

  private unsubscribe = new Subject();

  constructor(private store: Store) {
    this.updateButtonText();
  }

  ngOnInit(): void {
    this.store.pipe(
      select(UserInterfaceSelectors.getIsLastHint),
      tap(isLastHint => {
        this.isLastHint = isLastHint;
        this.updateButtonText();
      }),
      takeUntil(this.unsubscribe)
    ).subscribe();

    this.store.pipe(
      select(UserInterfaceSelectors.getIsGameEnded),
      tap(gameEnded =>{
          this.gameEnded = gameEnded;
          this.updateButtonText();}
      ),
      takeUntil(this.unsubscribe)
    ).subscribe();
  }

  public nextHint(): void {
    if(this.gameEnded) {
      this.store.dispatch(GameActions.newGame());
    }
    else{
    this.store.dispatch(GameActions.nextHint());
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }

  private updateButtonText(): void {
    if(this.gameEnded){
      this.buttonText = "New game"
    } else {
      this.buttonText = this.isLastHint ? 'Show the answer!' : 'Next hint!';
    }
  }
}
