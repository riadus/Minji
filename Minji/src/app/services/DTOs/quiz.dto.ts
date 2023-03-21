    export interface NationalityDTO {
        country: string;
        isoCode: string;
    }

    export interface BirthDTO {
        city: string;
        country: string;
        date: Date;
    }

    export interface PhysicalDetailDTO {
        value: number;
        unit: string;
    }

    export interface PhysicalDetailsDTO {
        height: PhysicalDetailDTO;
        weight: PhysicalDetailDTO;
    }

    export interface TeamDTO {
        name: string;
        shortName: string;
        icon: string;
    }

    export interface FeeDTO {
        amount: number;
        currency: string;
    }

    export interface TransferDTO {
        team: TeamDTO;
        fee: FeeDTO;
        type: number;
    }

    export interface PlayerDTO {
        firstName: string;
        lastName: string;
        displayName: string;
        nationality: NationalityDTO;
        birth: BirthDTO;
        physicalDetails: PhysicalDetailsDTO;
        transfers: TransferDTO[];
        imageUrl: string;
    }

    export interface HintDTO {
        player: PlayerDTO;
        order: number;
    }

    export interface QuizDTO {
        id: string;
        hint: HintDTO;
    }