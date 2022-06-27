import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() item:Item;
  @Output() editType =  new EventEmitter<string>();
  @Output() editItem =  new EventEmitter<Item>();
  @Output() delete =  new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.editType.emit("Editar");
    this.editItem.emit(this.item);
  }

  deleteItem(){
    this.delete.emit(this.item);
  }
}
