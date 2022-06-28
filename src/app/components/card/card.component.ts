import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() item:Item;
  @Output() editType =  new EventEmitter<string>();
  @Output() editItem =  new EventEmitter<Item>();

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  edit(){
    this.editType.emit("Editar");
    this.editItem.emit(this.item);
  }

  deleteItem(){
    this.api.delete(this.item.id).subscribe(data=>{
      console.log(data);
    });
  }
}
