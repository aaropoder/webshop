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

  // PUT - asendatakse kõik asjad ära andmebaasis selle väärtusega, mis kaasa anname
  // saveItemsToDatabase(): void {
  saveItemsToDatabase() {
    this.http.put(this.url + 'items.json', this.items).subscribe();
  }

  // GET - võtab andmebaasist
  // getItemsFromDatabase(): Observable<Item[]> {
  getItemsFromDatabase() {
    // return this.http.get(this.url + 'items.json');
    return this.http.get<Item[]>(this.url + 'items.json');
  }

  // POST - lisatakse väärtus juurde, mis kaasa anname
  addItemtoDatabase(item: Item) {
    console.log('TEST ' + item);
    this.http.post(this.url + 'items.json', item).subscribe();
  }
}

// item!: Item;   onAdd(item: Item){}   getItem():Item {} < määran tüübi mida funktsioon tagastab
// new Item(price, category, title, imgSrc)
// this.http.get<Item>() itemChanged = new Subject<Item>(); || this.http.get<Item[]>() itemsChanged = new Subject<Item[]>();

// .subscribe(
//   (reponse) => {
//     console.log(reponse);
//   },
//   (error) => {
//     console.log(error);
//   }
// );
