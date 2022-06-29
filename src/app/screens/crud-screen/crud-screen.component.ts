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
  item:Item;

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.list();
    this.item = new Item('','','');
  }

  list(){
    //this.items.splice(0, this.items.length);
    this.api.list().subscribe(data=>{
      this.items = data;
    });
  }

  getItem(id:number){
    this.api.get(id).subscribe(data=>{
      this.item = data;
    });
  }

  addItem(item:Item){
    this.api.post(item).subscribe(data=>{
      console.log(data);
    });
    this.list();
  }

  editType(type:string){
    this.type = type;
    if(this.type == "Agregar"){
      this.item.title = '';
      this.item.text = '';
      this.item.img = '';
    }
  }

  editItem(item:Item){
    item.id = this.item.id;
    if(this.item.img == item.img){
      this.api.putNotImg(item).subscribe(data=>{
        console.log(data);
      });
    }else{
      this.api.put(item).subscribe(data=>{
        console.log(data);
      });
    }
    this.list();
  }

  deleteItem(id:number){
    this.api.delete(id).subscribe(data=>{
      console.log(data);
    });
    this.list();
  }
}
