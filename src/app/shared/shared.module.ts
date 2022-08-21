import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './header/navigation/navigation.component';
import { RibbonComponent } from './ribbon/ribbon.component';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent, RibbonComponent],
  imports: [RouterModule, CommonModule],
  exports: [
    RouterModule,
    HeaderComponent,
    NavigationComponent,
    RibbonComponent,
  ],
})
export class SharedModule {}
