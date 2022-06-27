import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() type:string;
  @Input() title:string;
  @Input() text:string;
  @Input() item:Item;

  checkFlag:boolean = false;

  @Output() add = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  checkText(){
    if(this.title == '' || this.text == ''){
      this.checkFlag = false;
    }else{
      this.checkFlag = true;
    }
  }

  cancel(){
    if(this.type == 'Agregar'){
      this.title = '';
      this.text = '';
    }else{
      this.title = this.item.title;
      this.text = this.item.text;
    }
    this.checkFlag = false;
  }

  submit(){
    if(this.type == 'Agregar'){
      this.add.emit(new Item('https://media.discordapp.net/attachments/986412132881006602/990734490211078164/Conejo_Swager.png',this.title,this.text));
      this.cancel();
    }else{
      this.item.title = this.title;
      this.item.text = this.text;
      this.cancel();
    }
  }
}
