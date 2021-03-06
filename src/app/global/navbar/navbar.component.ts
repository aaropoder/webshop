import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/auth/auth.service';
import { AutologinService } from 'src/app/auth/autologin.service';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartSum: number = 0;
  user!: string | undefined;
  isLoggedIn = false;

  constructor(
    private cartService: CartService,
    private translate: TranslateService,
    private autologinService: AutologinService,
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    let cookieValue = this.cookieService.get('Ostukorv');
    this.cartService.cartItems = cookieValue == '' ? [] : JSON.parse(cookieValue);

    this.user = this.autologinService.autologin();
    this.autologinService.isLoggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      console.log('SUBSCRIBE LÄHEB KÄIMA');
    });
    this.isLoggedIn = this.user ? true : false;

    this.calculateSumOfCart(this.cartService.cartItems);
    this.cartService.cartChanged.subscribe((items) => {
      this.calculateSumOfCart(items);
    });
    let lang = localStorage.getItem('language');
    if (lang) {
      this.useLanguage(lang);
    }
  }

  calculateSumOfCart(itemsToCalculate: { cartItem: Item; count: number }[]) {
    this.cartSum = 0;
    itemsToCalculate.forEach((item) => {
      this.cartSum += item.cartItem.price * item.count;
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  onLogout() {
    this.authService.logout();
    console.log('NEXT PANEB SUBSCRIBE UUESTI KÄIMA');
    this.autologinService.isLoggedIn.next(false);
  }
}
