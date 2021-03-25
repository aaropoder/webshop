import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AutologinService } from 'src/app/auth/autologin.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartSum: number = 0;
  user!: string | undefined;

  constructor(
    private cartService: CartService,
    private translate: TranslateService,
    private autologinService: AutologinService
  ) {}

  // arrow function (items) => on justkui sama function(items) ehk ES6 ja ES5

  ngOnInit(): void {
    this.user = this.autologinService.autologin();
    console.log(this.user);

    this.cartService.cartChanged.subscribe((items) => {
      this.cartSum = 0;
      items.forEach((item) => {
        this.cartSum += item.cartItem.price * item.count;
      });
    });
    let lang = localStorage.getItem('language');
    // if (lang != null) {
    if (lang) {
      this.useLanguage(lang);
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
