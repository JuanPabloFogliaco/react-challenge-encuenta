export interface IDriver {
  id: number;
  name: string;
  team: string;
}

export interface RaceResult {
  position: number;
  laps: string;
  time: string;
  driver: IDriver;
}

export interface Race {
  id: string;
  date: string;
  laps: string;
  results: RaceResult[];
}

export interface RaceSortedResponse {
  race: Race;
  results: Array<RaceResult>;
}
