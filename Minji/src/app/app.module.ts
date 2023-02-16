import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { GameComponent } from './components/game/game.component';
import { PropositionComponent } from './components/proposition/proposition.component';
import { HintListComponent } from './components/hint-list/hint-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers } from './store/reducers/meta.reducers';
import { gameReducer } from './store/reducers/game.reducer';
import { GameEffects } from './store/effects/game.effects';
import { PhysicalDetailsComponent } from './components/hints/physical-details/physical-details.component';
import { TeamsComponent } from './components/hints/teams/teams.component';
import { BirthDetailsComponent } from './components/hints/birth-details/birth-details.component';
import { NationalityComponent } from './components/hints/nationality/nationality.component';
import { PictureComponent } from './components/hints/picture/picture.component';
import { PositionComponent } from './components/hints/position/position.component';
import { AnswerComponent } from './components/hints/answer/answer.component';
import { userInterfaceReducer } from './store/reducers/user-interface.reducer';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/en';
import { NextHintComponent } from './components/next-hint/next-hint.component';
import { FormsModule } from '@angular/forms';
registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GameComponent,
    PropositionComponent,
    HintListComponent,
    PhysicalDetailsComponent,
    TeamsComponent,
    BirthDetailsComponent,
    NationalityComponent,
    PictureComponent,
    PositionComponent,
    AnswerComponent,
    NextHintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      root: gameReducer
    },
      {
        metaReducers,
        runtimeChecks: {
          strictStateSerializability: false,
          strictActionSerializability: false,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
          strictStateImmutability: false,
          strictActionImmutability: true,
        },
      }),
    StoreModule.forFeature('user-interface', userInterfaceReducer),  
    EffectsModule.forRoot([GameEffects]),
    BrowserAnimationsModule,
    FormsModule
    ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
