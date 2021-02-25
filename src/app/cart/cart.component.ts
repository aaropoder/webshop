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
  cartItems: Item[] = [];

  // dependency injection - service'i kasutusele võtmine componendis
  // kui kompileertitakse, siis tekitatakse muutja sellele klassile ja väärtused saadakse CartService seest
  constructor(private cartService: CartService) {}

  //this. abil näeb kõike, mis on selle klassi sees
  // kui minnakse HTMLi, pannakse ngOnInit käima
  ngOnInit(): void {
    console.log(this.cartService.cartItems);
    // vasakul saab väärtust, paremal annab väärtust
    this.cartItems = this.cartService.cartItems;
    console.log('olen cart componendis');
    // efektiivseim on anda seda väärtust ngOnInit sees, sest sellisel juhul läheb seda täpselt vaja
  }

  onDeleteFromCart(i: number) {
    this.cartService.cartItems.splice(i, 1);
  }
}
