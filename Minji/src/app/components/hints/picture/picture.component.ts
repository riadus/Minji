import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import * as GameSelectors from "../../../store/selectors/game.selectors"

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit, OnDestroy {

  public picture = '';
  
  private unsubscribe = new Subject();
  constructor(private store: Store){
  }

  ngOnInit(): void {
    this.store.pipe(
      select(GameSelectors.getImage),
      tap(image => this.picture = image),
      takeUntil(this.unsubscribe)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }
}
