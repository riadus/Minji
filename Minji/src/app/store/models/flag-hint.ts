export interface Nationality {
    country: string;
    code: string;
}

export interface TeamDetails {
    name: string;
    imgPath: string;
}

export interface Transfer {
    currency: string;
    amount: string;
    type: string;
}

export interface Team {
    teamHint: TeamDetails;
    transferHint: Transfer;
    season: string;
}

export interface PlayerPhysicalDetails {
    height: string;
    weight: string;
}

export interface PlayerBirthDetails {
    placeOfBirth: string;
    countyOfBirth: string;
    dateOfBirth: Date;
}

export interface Player {
    teams: Team[];
    physicalDetails: PlayerPhysicalDetails;
    nationality: Nationality;
    position: string;
    birthDetails: PlayerBirthDetails;
    image: string;
    name: string;
}

export interface GameState {
    playerToGuess: Player;
    id: string;
    step: number;
    maxHints: number; 
}

export interface UserInterfaceState {
    showNationality: boolean;
    showTeams: boolean;
    showPhysicalDetails: boolean;
    showPosition: boolean;
    showBirthDetails: boolean;
    showImage: boolean;
    showName: boolean;
    lastHint: boolean;
    gameEnded: boolean;
    gameRestarted: boolean;
}