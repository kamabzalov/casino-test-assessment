import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './header/navigation/navigation.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent, RibbonComponent, DropdownMenuComponent],
  imports: [RouterModule, CommonModule, NgbDropdownModule],
  exports: [
    RouterModule,
    HeaderComponent,
    NavigationComponent,
    RibbonComponent,
  ],
})
export class SharedModule {}
