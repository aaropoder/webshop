import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
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
  kuupaev = new Date();

  constructor(private cartService: CartService, private itemService: ItemService) {}

  ngOnInit(): void {
    // this.items = this.itemService.items;
    this.itemService.getItemsFromDatabase().subscribe((itemsFromDatabase) => {
      this.itemsOriginal = [];
      this.itemService.items = [];
      for (const key in itemsFromDatabase) {
        const element = itemsFromDatabase[key];
        console.log(element);
        this.itemsOriginal.push(element);
        this.itemsShown = this.itemsOriginal.slice(); // slice - ei anna mälukohta edasi, teeb koopia
        this.itemService.items.push(element);
      }
      // this.items = itemsFromDatabase;
      // this.itemService.items = itemsFromDatabase;

      // let cartItems = this.cartService.cartItems;
      // this.itemsShown = this.itemsOriginal.map((item) => {
      //   cartItems.forEach((cartItem) => {
      //     return { ...item, count: cartItem.count };
      //   });
      // });
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

  onDeleteFromCart(item: Item) {
    let i = this.cartService.cartItems.findIndex(
      (cartItem) => item.title == cartItem.cartItem.title && item.price == cartItem.cartItem.price
    );
    if (i != -1) {
      if (this.cartService.cartItems[i].count == 1) {
        this.cartService.cartItems.splice(i, 1);
      } else {
        this.cartService.cartItems[i].count -= 1;
      }
      this.cartService.cartChanged.next(this.cartService.cartItems);
    }
  }

  // onAddToCart(item: {imgSrc: string, title: string, price: number, category:string}) {
  onAddToCart(item: Item) {
    let i = this.cartService.cartItems.findIndex(
      (cartItem) => item.title == cartItem.cartItem.title && item.price == cartItem.cartItem.price
    );
    if (i == -1) {
      this.cartService.cartItems.push({ cartItem: item, count: 1 });
    } else {
      this.cartService.cartItems[i].count += 1;
    }
    this.cartService.cartChanged.next(this.cartService.cartItems);
  }
}
