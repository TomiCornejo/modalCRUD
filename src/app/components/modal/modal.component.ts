import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { Item } from 'src/app/models/item.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  
  @Input() type:string;
  @Input() title:string;
  @Input() text:string;
  @Input() img:string;

  checkFlag:boolean = false;
  imgFlag:boolean = false;

  @Output() addItem = new EventEmitter<Item>();
  @Output() editItem = new EventEmitter<Item>();

  constructor(private sanitizer: DomSanitizer,private api:ApiService) { }

  ngOnInit(): void {
  }

  checkText(){
    if(this.type == 'Agregar'){
      if(this.title == '' || this.text == '' || this.imgFlag == false){
        this.checkFlag = false;
      }else{
        this.checkFlag = true;
      }
    }else{
      if(this.title == '' || this.text == ''){
        this.checkFlag = false;
      }else{
        this.checkFlag = true;
      }
    }
  }

  cancel(){
    if(this.type == 'Agregar'){
      this.title = '';
      this.text = '';
      this.img = '';
    }
    this.checkFlag = false;
    this.imgFlag = false;
  }

  submit(){
    if(this.type == 'Agregar'){
      this.addItem.emit(new Item(this.img,this.title,this.text));
      this.cancel();
    }else{
      this.editItem.emit(new Item(this.img,this.title,this.text));
      this.cancel();
    }
  }

  captureFile(event:any){
    const img = event.target.files[0];
    this.extractBase64(img).then((image:any)=>{
      this.img = image.base;
    });
    this.imgFlag = true;
    this.checkText();
  }

  extractBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
      return reader.result;
    } catch (e) {
      return null;
    }
  })
}
