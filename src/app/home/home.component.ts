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
  items: Item[] = [];

  constructor(
    private cartService: CartService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    console.log('olen home componendis');
    this.items = this.itemService.items;
  }

  // onAddToCart(item: {imgSrc: string, title: string, price: number, category:string}) {
  onAddToCart(item: Item) {
    this.cartService.cartItems.push(item);
    this.cartService.cartChanged.next(this.cartService.cartItems);
  }
}
