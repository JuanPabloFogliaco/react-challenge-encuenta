export interface Driver {
    id: number;
    name: string;
    team: string;
    country: string;
}

export interface RaceResult {
    position: number;
    driver_id: number;
    laps: number;
    time: string;
}

export interface Race {
    id: string;
    date: string;
    laps: number;
    results: RaceResult[];
}

export interface Response {
    race: Race;
    drivers: Driver[];
}
