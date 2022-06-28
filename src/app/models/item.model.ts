export class Item{
    id:number;
    img:string;
    title:string;
    text:string;

    constructor(img:string,title:string,text:string,id:number = 0){
        this.id = id;
        this.img = img;
        this.title = title;
        this.text = text;
    }
}