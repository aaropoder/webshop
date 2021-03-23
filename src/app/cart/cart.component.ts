import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // koolon annab tüüpi, võrdus annab väärtust
  // cartItems: { imgSrc: string; title: string; price: number; category: string; }[] = [];
  cartItems: { cartItem: Item; count: number }[] = [];
  sumOfCart: number = 0;

  // Dependency injection - service'i kasutusele võtmine componendis
  // kui kompileertitakse, siis tekitatakse muutja sellele klassile ja väärtused saadakse CartService seest
  constructor(private cartService: CartService) {}

  //this. abil näeb kõike, mis on selle klassi sees
  // kui minnakse HTMLi, pannakse ngOnInit käima
  ngOnInit(): void {
    console.log('olen cart componendis');
    // vasakul saab väärtust, paremal annab väärtust
    this.cartItems = this.cartService.cartItems;
    // efektiivseim on anda seda väärtust ngOnInit sees, sest sellisel juhul läheb seda täpselt vaja
    this.calculateSumOfCart();
  }

  onDeleteAllFromCart(i: number) {
    this.cartService.cartItems.splice(i, 1);
    this.cartService.cartChanged.next(this.cartService.cartItems);
    this.calculateSumOfCart();
  }

  onEmptyCart() {
    this.cartService.cartItems.splice(0);
    this.cartService.cartChanged.next(this.cartService.cartItems);
    this.calculateSumOfCart();
  }

  onDeleteOneFromCart(item: Item) {
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
      this.calculateSumOfCart();
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
    this.calculateSumOfCart();
  }

  calculateSumOfCart() {
    this.sumOfCart = 0;
    this.cartItems.forEach((item) => {
      // this.sumOfCart = this.sumOfCart + item.price;
      this.sumOfCart += item.cartItem.price * item.count;
    });
  }
}

// string - jutumärkidega väärtus '12.00'
// number - numbriline väärtus 12.00
// boolean - true/false
// object/json - {}
// massiivid-listid - []
