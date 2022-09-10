import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game, RestService } from '@app/services/rest/rest.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'casino-game-category',
  templateUrl: './game-category.component.html',
  styleUrls: ['./game-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCategoryComponent implements OnInit {
  protected gamesCategory$: Observable<Game[]>;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.gamesCategory$ = this.route.params.pipe(
      switchMap(params => {
        const category = params['category'];
        return this.restService.getGamesByCategory(category);
      })
    );
  }
}
