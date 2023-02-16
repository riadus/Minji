import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import * as GameSelectors from "../../../store/selectors/game.selectors"

@Component({
  selector: 'app-birth-details',
  templateUrl: './birth-details.component.html',
  styleUrls: ['./birth-details.component.css']
})
export class BirthDetailsComponent implements OnInit, OnDestroy {
  public country = '';
  public city = '';
  public date = new Date();

  private unsubscribe = new Subject();
  constructor(private store: Store){
  }

  ngOnInit(): void {
    this.store.pipe(
      select(GameSelectors.getBirthDetails),
      tap(birthDetails => {
        this.country = birthDetails.countyOfBirth;
        this.city = birthDetails.placeOfBirth;
        this.date = birthDetails.dateOfBirth;
      }),
      takeUntil(this.unsubscribe)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }
}


