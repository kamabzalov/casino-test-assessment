import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';

const REST_URL = new InjectionToken<string>('REST API URL', {
  factory: () => 'http://stage.whgstage.com/front-end-test/',
});

export interface Game {
  id: string;
  name: string;
  image: string;
  categories: string[];
}

@Injectable({
  providedIn: 'root',
})
export class RestService {
  public response$: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([]);

  constructor(
    private http: HttpClient,
    @Inject(REST_URL) private rest: string
  ) {}

  public getAllCategories(): Observable<Game[]> {
    return this.http
      .get<Game[]>(`${this.rest}games.php`)
      .pipe(tap(games => this.response$.next(games)));
  }

  public getGamesByCategory(category: string) {
    const games: Game[] = this.response$.getValue();
    if (!games.length) {
      return this.getAllCategories().pipe(
        map(games => this.filterGamesByCategory(games, category))
      );
    }
    return of(games).pipe(
      map(games => this.filterGamesByCategory(games, category))
    );
  }

  private filterGamesByCategory(games: Game[], category: string): Game[] {
    return games.filter(game =>
      game.categories.find(item => item === category)
    );
  }
}
