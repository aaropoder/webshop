import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  categories: { categoryName: string }[] = [];
  items: Item[] = [];
  barcode!: number;
  barcodeUnique = true;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItemsFromDatabase().subscribe((itemsFromDatabase) => {
      this.items = [];
      this.itemService.items = [];
      for (const key in itemsFromDatabase) {
        const element = itemsFromDatabase[key];
        this.items.push(element);
        this.itemService.items.push(element);
      }
    });
  }

  onCheckBarcodeUnique() {
    let barcodeID = this.items.findIndex((item) => item.barcode === this.barcode);
    this.barcodeUnique = barcodeID == -1 ? true : false;
  }

  onSubmit(form: NgForm) {
    if (form.valid == true) {
      const item = new Item(
        form.value.imgSrc,
        form.value.title,
        form.value.price,
        form.value.category,
        form.value.barcode,
        form.value.producer,
        form.value.description,
        true,
        0
      );
      // this.itemService.items.push(form.value);
      this.itemService.items.push(item);
      // this.itemService.saveItemsToDatabase();
      this.itemService.addItemtoDatabase(item).subscribe(() => form.reset());
    }
  }
}
