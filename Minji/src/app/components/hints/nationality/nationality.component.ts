import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import * as GameSelectors from "../../../store/selectors/game.selectors"

@Component({
  selector: 'app-nationality',
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.css']
})
export class NationalityComponent implements OnInit, OnDestroy {

  public icon = '';
  public country = '';
  
  private unsubscribe = new Subject();
  constructor(private store: Store){
  }

  ngOnInit(): void {
    this.store.pipe(
      select(GameSelectors.getNationality),
      tap(nationality => this.icon = "assets/svg/flags/" + nationality.code + ".svg"),
      tap(nationality => this.country = nationality.country),
      takeUntil(this.unsubscribe)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }
}
