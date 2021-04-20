import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    private router: Router,
    private location: Location
  ) {}

  // item: Item | undefined (või tühi)
  item!: Item;
  editItemForm!: FormGroup;
  id!: number;
  items: Item[] = [];
  barcode!: number;
  barcodeUnique = true;
  categoriesObservable!: Subscription;
  itemsObservable!: Subscription;

  ngOnInit(): void {
    // this.categoriesObservable = this.categoruServoce.getCategories....

    this.id = Number(this.activatedRoute.snapshot.paramMap.get('itemId'));
    let item = this.itemService.items.find((item) => item.barcode == this.id);
    if (item) {
      this.item = item;
      this.barcode = item.barcode;
    }

    this.itemsObservable = this.itemService.getItemsFromDatabase().subscribe((itemsFromDatabase) => {
      this.items = [];
      this.itemService.items = [];
      for (const key in itemsFromDatabase) {
        const element = itemsFromDatabase[key];
        this.items.push(element);
        this.itemService.items.push(element);
      }
    });

    this.editItemForm = new FormGroup({
      title: new FormControl(this.item.title),
      price: new FormControl(this.item.price),
      imgSrc: new FormControl(this.item.imgSrc),
      category: new FormControl(this.item.category),
      barcode: new FormControl(this.item.barcode),
      producer: new FormControl(this.item.producer),
      description: new FormControl(this.item.description), // vasakpoolne sama, mis HTMLis vormis fomrControlName=""
      isActive: new FormControl(this.item.isActive), //(this.item.---), sama mis modelis
    });
  }

  onBack() {
    // this.router.navigateByUrl('/admin/view-items');
    this.location.back();
  }

  onCheckBarcodeUnique() {
    let barcodeID = this.items.findIndex((item) => item.barcode === this.barcode);
    this.barcodeUnique = barcodeID == -1 || this.barcode == this.item.barcode ? true : false;
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const item = new Item(
        form.value.imgSrc,
        form.value.title,
        form.value.price,
        form.value.category,
        form.value.barcode,
        form.value.producer,
        form.value.description,
        form.value.isActive
      );

      let itemID = this.itemService.items.findIndex((item) => item.barcode == this.id);

      if (itemID != -1) {
        this.itemService.items[itemID] = item;
        this.itemService.saveItemsToDatabase().subscribe(() => this.router.navigateByUrl('/admin/view-items'));
        // setTimeout(() => {}, 200);
      }
    }
  }

  ngOnDestroy() {
    // this.categoriesObservable.unsubscribe();
    this.itemsObservable.unsubscribe();
  }
}
