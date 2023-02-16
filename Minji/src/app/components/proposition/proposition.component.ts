import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import * as UserInterfaceSelectors from "../../store/selectors/user-interface.selectors"

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent implements OnInit, OnDestroy {
  public players: string[] = [];
  public suggestion = '';

  private unsubscribe = new Subject();

  constructor(private store: Store) {
  }

  ngOnInit(): void {

    this.store.pipe(
      select(UserInterfaceSelectors.getIsGameRestarted),
      tap(gameRestarted => {
        if(gameRestarted)
        {
          this.players = [];
        }
      }
      ),
      takeUntil(this.unsubscribe)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }

  public suggest() : void {
    this.players.unshift(this.suggestion);
    this.suggestion = '';
  }
}
