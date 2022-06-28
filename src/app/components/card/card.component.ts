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
  @Output() deleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  editI(){
    this.editType.emit("Editar");
    this.editItem.emit(this.item);
  }

  deleteI(){
    this.deleteItem.emit(this.item.id);
  }
}
