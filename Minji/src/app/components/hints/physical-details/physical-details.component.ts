import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import * as GameSelectors from "../../../store/selectors/game.selectors"

@Component({
  selector: 'app-physical-details',
  templateUrl: './physical-details.component.html',
  styleUrls: ['./physical-details.component.css']
})
export class PhysicalDetailsComponent implements OnInit, OnDestroy {
  public height = '';
  public weight = '';

  private unsubscribe = new Subject();
  constructor(private store: Store){
  }

  ngOnInit(): void {
    this.store.pipe(
      select(GameSelectors.getPhysicalDetails),
      tap(physicalDetails => {
        this.height = physicalDetails.height
        this.weight = physicalDetails.weight;
      }),
      takeUntil(this.unsubscribe)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }
}
