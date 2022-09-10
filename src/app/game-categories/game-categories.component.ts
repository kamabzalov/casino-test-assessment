import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Game, RestService } from '@app/services/rest/rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'casino-game-categories',
  templateUrl: './game-categories.component.html',
  styleUrls: ['./game-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCategoriesComponent implements OnInit {
  protected games$: Observable<Game[]>;

  constructor(private restService: RestService) {}

  public ngOnInit(): void {
    this.games$ = this.restService.getAllCategories();
  }
}
