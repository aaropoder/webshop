import { Component, OnInit } from '@angular/core';
import { AutologinService } from '../auth/autologin.service';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  itemsOriginal: Item[] = [];
  itemsShown: Item[] = [];
  priceSortNumber = 0;
  titleSortNumber = 0;
  cookieValue = '';
  cartItems = [];
  isLoggedIn = false;

  constructor(private itemService: ItemService, private autologinService: AutologinService) {}

  ngOnInit(): void {
    let user = this.autologinService.autologin();
    console.log('NAVBAR NGONIT');
    this.autologinService.isLoggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      console.log('SUBSCRIBE LÄHEB KÄIMA');
    });
    this.isLoggedIn = user ? true : false;

    this.itemService.getItemsFromDatabase().subscribe((itemsFromDatabase) => {
      this.itemsOriginal = [];
      this.itemService.items = [];

      for (const key in itemsFromDatabase) {
        const element = itemsFromDatabase[key];
        this.itemsOriginal.push(element);
        this.itemsShown = this.itemsOriginal.slice(); // slice - ei anna mälukohta edasi, teeb koopia
        this.itemService.items.push(element);
      }

      // this.items = itemsFromDatabase;
      // this.itemService.items = itemsFromDatabase;
    });
  }

  onCategoryFilter(category: string) {
    this.itemsShown = this.itemsOriginal.filter((item) => item.category == category);
  }

  onSortPrice() {
    if (this.priceSortNumber == 0) {
      this.itemsShown.sort((a, b) => a.price - b.price);
      this.priceSortNumber = 1;
    } else if (this.priceSortNumber == 1) {
      this.itemsShown.sort((a, b) => b.price - a.price);
      this.priceSortNumber = 2;
    } else {
      this.itemsShown = this.itemsOriginal.slice();
      this.priceSortNumber = 0;
    }
  }

  onSortTitle() {
    if (this.titleSortNumber == 0) {
      this.itemsShown.sort((a, b) => a.title.localeCompare(b.title));
      this.titleSortNumber = 1;
    } else if (this.titleSortNumber == 1) {
      this.itemsShown.sort((a, b) => b.title.localeCompare(a.title));
      this.titleSortNumber = 2;
    } else {
      this.itemsShown = this.itemsOriginal.slice();
      this.titleSortNumber = 0;
    }
  }

  itemActiveChanged(item: Item) {
    let i = this.itemsOriginal.indexOf(item);
    // this.itemsOriginal[i] = item;
    this.itemService.items[i] = item;
    this.itemService.saveItemsToDatabase();
  }
}
