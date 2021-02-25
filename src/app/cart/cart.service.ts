import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  // cartItems: { imgSrc: string; title: string; price: number; category: string; }[] = [];
  cartItems: Item[] = [];
}
