import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GameCategoriesComponent } from './game-categories/game-categories.component';
import { GameCategoryComponent } from './game-category/game-category.component';
import { GameCardComponent } from './game-card/game-card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    GameCategoriesComponent,
    GameCategoryComponent,
    GameCardComponent,
  ],
  imports: [BrowserModule, SharedModule, AppRoutingModule, HttpClientModule, StoreModule.forRoot({}, {}), EffectsModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
