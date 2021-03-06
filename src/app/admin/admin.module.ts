import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './item/add-item/add-item.component';
import { EditItemComponent } from './item/edit-item/edit-item.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewItemsComponent } from './item/view-items/view-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ItemModule } from '../item/item.module';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselSettingsComponent } from './carousel-settings/carousel-settings.component';

@NgModule({
  declarations: [
    AddItemComponent,
    EditItemComponent,
    AdminHomeComponent,
    ViewItemsComponent,
    CarouselSettingsComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AppRoutingModule, TranslateModule, ItemModule],
})
export class AdminModule {}
