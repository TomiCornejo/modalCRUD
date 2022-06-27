import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.sass']
})
export class AddBtnComponent implements OnInit {

  @Output() add =  new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    this.add.emit("Agregar");
  }
}
