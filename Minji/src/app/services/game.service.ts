import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GameState, Player } from '../store/models/flag-hint';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  private birthDetails = {
    countyOfBirth: 'France',
    dateOfBirth: new Date(1998, 11, 20),
    placeOfBirth : 'Paris'
  };

  private nationality = {
    code : 'fr',
    country : 'France'
  };

  private physicalDetail = {
    height: '178 cm',
    weight: '73 kg'
  };

  private teams = [
    {
      season: '',
      teamHint: {
        imgPath: 'https://cdn.sportmonks.com/images/soccer/teams/5/6789.png',
        name: ''
      },
      transferHint: {
        amount: '',
        currency: '',
        type : ''
      }
    },
    {
      season: '',
      teamHint: {
        imgPath: 'https://cdn.sportmonks.com/images/soccer/teams/15/591.png',
        name: ''
      },
      transferHint: {
        amount: '',
        currency: '',
        type : ''
      }
    },
    {
      season: '',
      teamHint: {
        imgPath: 'https://cdn.sportmonks.com/images/soccer/teams/15/591.png',
        name: ''
      },
      transferHint: {
        amount: '',
        currency: '',
        type : ''
      }
    }
  ];

  private teamsWithName = [
    {
      season: '',
      teamHint: {
        imgPath: 'https://cdn.sportmonks.com/images/soccer/teams/5/6789.png',
        name: 'AS Monaco'
      },
      transferHint: {
        amount: '',
        currency: '',
        type : ''
      }
    },
    {
      season: '',
      teamHint: {
        imgPath: 'https://cdn.sportmonks.com/images/soccer/teams/15/591.png',
        name: 'PSG'
      },
      transferHint: {
        amount: '',
        currency: '',
        type : ''
      }
    },
    {
      season: '',
      teamHint: {
        imgPath: 'https://cdn.sportmonks.com/images/soccer/teams/15/591.png',
        name: 'PSG'
      },
      transferHint: {
        amount: '',
        currency: '',
        type : ''
      }
    }
  ];

  private teamsWithTransfers = [
    {
      season: '',
      teamHint: {
        imgPath: 'https://cdn.sportmonks.com/images/soccer/teams/5/6789.png',
        name: 'AS Monaco'
      },
      transferHint: {
        amount: '',
        currency: '',
        type : ''
      }
    },
    {
      season: '',
      teamHint: {
        imgPath: 'https://cdn.sportmonks.com/images/soccer/teams/15/591.png',
        name: 'PSG'
      },
      transferHint: {
        amount: '0',
        currency: '€',
        type : 'loan'
      }
    },
    {
      season: '',
      teamHint: {
        imgPath: 'https://cdn.sportmonks.com/images/soccer/teams/15/591.png',
        name: 'PSG'
      },
      transferHint: {
        amount: '180 M',
        currency: '€',
        type : 'bought'
      }
    }
  ];

  public nextHint(gameState: GameState) : Observable<GameState> {
    switch(gameState.step){
      case 0:
        gameState.playerToGuess.teams = this.teams;
        break;
      case 1:
        gameState.playerToGuess.teams = this.teamsWithName;
        break;
      case 2:
        gameState.playerToGuess.teams = this.teamsWithTransfers;
        break;
      case 3:
        gameState.playerToGuess.nationality = this.nationality;
        break;
      case 4:
        gameState.playerToGuess.birthDetails = this.birthDetails;
        break;
      case 5:
        gameState.playerToGuess.physicalDetails = this.physicalDetail;
        break;
      case 6:
        gameState.playerToGuess.image = 'https://cdn.sportmonks.com/images/soccer/players/3/96611.png';
        break;
      case 7:
        gameState.playerToGuess.name = 'Kylian Mbappé';
        break;
    }
    gameState.maxHints = 7;
    gameState.step++;
    return of(gameState);
  }
}
