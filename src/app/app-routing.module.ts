import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCategoriesComponent } from '@app/game-categories/game-categories.component';
import { GameCategoryComponent } from '@app/game-category/game-category.component';

const routes: Routes = [
  {
    path: '',
    component: GameCategoriesComponent,
  },
  {
    path: 'category/:category',
    component: GameCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
