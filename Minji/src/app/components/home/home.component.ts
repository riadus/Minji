import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { nextHint } from 'src/app/store/actions/game.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private store: Store) {

  }

  public startNewGame(): void {
    this.router.navigateByUrl('/quiz');
    this.store.dispatch(nextHint());
  }
}
