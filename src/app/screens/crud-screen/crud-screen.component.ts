import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-crud-screen',
  templateUrl: './crud-screen.component.html',
  styleUrls: ['./crud-screen.component.sass']
})
export class CrudScreenComponent implements OnInit {

  items:Item[];

  type:string;
  title:string;
  text:string;
  img:string;

  item:Item;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.api.list().subscribe(data=>{
      this.items = data;
    });
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
  
  editItem(item:Item){
    this.title = item.title;
    this.text = item.text;
    this.img = item.img;
    this.item = item;
  }
}
