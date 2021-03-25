import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  item!: Item;

  constructor(private route: ActivatedRoute, private itemSevice: ItemService, private cartService: CartService) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('itemId'));
    this.item = this.itemSevice.items[id];
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