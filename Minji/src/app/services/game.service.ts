import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { GameState, Nationality, Player, PlayerBirthDetails, PlayerPhysicalDetails, Team } from '../store/models/flag-hint';
import { initialNationality, initialPlayerBirthDetails, initialPlayerPhysicalDetails } from '../store/reducers/game.reducer';
import { PlayerDTO, QuizDTO, TransferDTO } from './DTOs/quiz.dto';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient : HttpClient) { }
  public nextHint(gameState: GameState) : Observable<GameState> {
    let url = "https://localhost:7185/game/" + gameState.id + "/hint/next";

    return this.httpClient.get<QuizDTO>(url).pipe(
        map(quizDto => this.mapToGameState(quizDto))
        );
  }

  public newGame() : Observable<string> {
    let url = "https://localhost:7185/game/new";
    
    return this.httpClient.get<string>(url);
  }

  private mapToGameState(quizDto: QuizDTO) : GameState {
    console.log(quizDto.hint.order);
    return {
        id: quizDto.id,
        maxHints: 7,
        step: quizDto.hint.order,
        playerToGuess: this.mapToPlayer(quizDto.hint.player)
    };
  }

  private mapToPlayer(playerDto: PlayerDTO) : Player {
    return {
        birthDetails: this.getBirthDetails(playerDto),
        image: playerDto.imageUrl,
        name: playerDto.displayName,
        nationality: this.getNationality(playerDto),
        physicalDetails: this.getPhysicalDetails(playerDto),
        position: '',
        teams: this.mapToTeams(playerDto.transfers)
    }
  }

  private getBirthDetails(playerDto: PlayerDTO) : PlayerBirthDetails {
    if(playerDto.birth == null) {
        return initialPlayerBirthDetails;
    }
    return {
        countyOfBirth: playerDto.birth?.country,
        placeOfBirth: playerDto.birth?.city,
        dateOfBirth: playerDto.birth?.date,
    };
  }

  private getNationality(playerDto: PlayerDTO) : Nationality {
    if(playerDto.nationality == null) {
        return initialNationality;
    }
    return {
        code: playerDto.nationality.isoCode,
        country: playerDto.nationality.country
    };
  }

  private getPhysicalDetails(playerDto: PlayerDTO) : PlayerPhysicalDetails {
    if(playerDto.physicalDetails == null) {
        return initialPlayerPhysicalDetails;
    }
    return {
        height: playerDto.physicalDetails.height.value + ' ' + playerDto.physicalDetails.height.unit,
        weight: playerDto.physicalDetails.weight.value + ' ' + playerDto.physicalDetails.weight.unit
    };
  }

  private mapToTeams(transfers: TransferDTO[]) : Team[] {
    let teams: Team[] = [];

    transfers.forEach(transfer => {
        let team : Team = {
            season: '',
            teamHint: {
                imgPath: transfer.team.icon,
                name: transfer.team.name
            },
            transferHint: {
                amount: transfer.fee != null ? String(transfer.fee.amount) : '',
                currency: transfer.fee?.currency,
                type: transfer.type
            }
        }
        teams.push(team);
    })
    return teams;
  }
}