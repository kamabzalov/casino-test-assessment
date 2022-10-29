export interface Game {
  id: string;
  name: string;
  image: string;
  categories: string[];
  jackpot: number;
  showRibbon: boolean;
}

export interface JackPot {
  game: string;
  amount: number;
}

export interface AppState {
  gamesList: Game[];
  gamesForCategory: Game[];
}
