import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-crud-screen',
  templateUrl: './crud-screen.component.html',
  styleUrls: ['./crud-screen.component.sass']
})
export class CrudScreenComponent implements OnInit {

  items:Item[] = [];

  type:string;
  title:string;
  text:string;

  item:Item;

  constructor() { }

  ngOnInit(): void {
  }

  editType(type:string){
    this.type = type;

    if(this.type == "Agregar"){
      this.title = '';
      this.text = '';
    }
  }

  addItem(item:Item){
    this.items.push(item);
  }

  deleteItem(item:Item){
    this.items.splice(this.items.indexOf(item),1);
  }

  editItem(item:Item){
    this.title = item.title;
    this.text = item.text;
    this.item = item;
  }
}
