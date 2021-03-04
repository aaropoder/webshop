import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartSum: number = 0;

  constructor(private cartService: CartService) {}

  // arrow function (items) => on justkui sama function(items) ehk ES6 ja ES5

  ngOnInit(): void {
    this.cartService.cartChanged.subscribe((items) => {
      this.cartSum = 0;
      items.forEach((item) => {
        this.cartSum += item.price;
      });
    });
  }
}
