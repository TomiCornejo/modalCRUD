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
    this.api.list().subscribe(data=>{
      this.items = data;
    });
  }

  getItem(id:number){
    let array = this.items.filter(function (item) { return item.id == id; });
    this.item = array[0];
    /*
    this.api.get(id).subscribe(data=>{
      this.item = data;
    });*/
  }

  addItem(item:Item){
    this.api.post(item).subscribe(data=>{
      console.log(data);
      this.items.push(data);
    });
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
    this.item.title = item.title;
    this.item.text = item.text;
    if(this.item.img == item.img){
      this.api.putNotImg(this.item).subscribe(data=>{
        console.log(data);
      });
    }else{
      this.item.img = item.img;
      this.api.put(this.item).subscribe(data=>{
        console.log(data);
        this.item.img = data.img;
      });
    }
  }

  deleteItem(id:number){
    this.api.delete(id).subscribe(data=>{
      console.log(data);
    });
    this.getItem(id);
    this.items.splice(this.items.indexOf(this.item),1);
  }
}
