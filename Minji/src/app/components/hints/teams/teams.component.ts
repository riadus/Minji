import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import { Team } from 'src/app/store/models/flag-hint';
import * as GameSelectors from "../../../store/selectors/game.selectors"

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  animations: [
    trigger(
      'appear', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('1s ease-out', 
                    style({ opacity: 1 }))
          ]
        )
      ],
     )
    ]
})
export class TeamsComponent implements OnInit, OnDestroy {

  public teams: Team[] = [];
  
  private unsubscribe = new Subject();
  constructor(private store: Store){
  }

  ngOnInit(): void {
    this.store.pipe(
      select(GameSelectors.getTeams),
      tap((teams: Team[]) => this.teams = teams),
      takeUntil(this.unsubscribe)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }

}

