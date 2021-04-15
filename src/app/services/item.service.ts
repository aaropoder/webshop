import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: Item[] = [];

  url: string = 'https://webshioap-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) {}

  saveItemsToDatabase(): void {
    // this.items = this.items.map((item) => ({
    //   ...item,
    //   barcode: this.getRandomNumber(),
    // }));
    this.http.put(this.url + 'items.json', this.items).subscribe();
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 99999999 - 10000000 + 10000000);
  }

  getItemsFromDatabase() {
    return this.http.get<Item[]>(this.url + 'items.json');
  }

  addItemtoDatabase(item: Item) {
    this.http.post(this.url + 'items.json', item).subscribe();
  }
}
