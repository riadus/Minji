import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import * as UserInterfaceSelectors from "../../store/selectors/user-interface.selectors"
import * as GameActions from "../../store/actions/game.actions"

@Component({
  selector: 'app-hint-list',
  templateUrl: './hint-list.component.html',
  styleUrls: ['./hint-list.component.css'],
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
      ]
    )
    ]
  })
  
export class HintListComponent implements OnInit, OnDestroy {
  public showNationality = true;
  public showTeams = false;
  public showPhysicalDetails = false;
  public showPosition = false;
  public showBirthDetails = false;
  public showImage = false;
  public showName = false;
  public buttonText = '';

  private unsubscribe = new Subject();

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.pipe(
      select(UserInterfaceSelectors.getShowNationality),
      tap(showNationality => this.showNationality = showNationality),
      takeUntil(this.unsubscribe)
    ).subscribe();

    this.store.pipe(
      select(UserInterfaceSelectors.getShowTeams),
      tap(showTeams => this.showTeams = showTeams),
      takeUntil(this.unsubscribe)
    ).subscribe();

    this.store.pipe(
      select(UserInterfaceSelectors.getShowPhysicalDetails),
      tap(showPhysicalDetails => this.showPhysicalDetails = showPhysicalDetails),
      takeUntil(this.unsubscribe)
    ).subscribe();

    this.store.pipe(
      select(UserInterfaceSelectors.getShowPosition),
      tap(showPosition => this.showPosition = showPosition),
      takeUntil(this.unsubscribe)
    ).subscribe();

    this.store.pipe(
      select(UserInterfaceSelectors.getShowBirthDetails),
      tap(showBirthDetails => this.showBirthDetails = showBirthDetails),
      takeUntil(this.unsubscribe)
    ).subscribe();

    this.store.pipe(
      select(UserInterfaceSelectors.getShowImage),
      tap(showImage => this.showImage = showImage),
      takeUntil(this.unsubscribe)
    ).subscribe();

    this.store.pipe(
      select(UserInterfaceSelectors.getShowName),
      tap(showName => this.showName = showName),
      takeUntil(this.unsubscribe)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }
}
