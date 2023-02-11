import {Content} from './content-interface';

export class ContentList {

  //static contentCount = 0;

  private _items: Content[];

  constructor() {
    this._items = [];
  }
  get contentsList(){
    return this._items;
  }

  add(content: Content){
    this._items.push(content);
  }

  count(){
    return this._items.length;
  }

  getContentDetails(index: number){
    let content = this._items[index];
    return `
        <div>
        <h1>Country: ${content.country}</h1>
        <p>destination: ${content.destination}</p>
        <img src="${content.imgURL}">
        <p>Food: ${content.food}</p>
        <p>Type: ${content.type}</p>
        <p>Tags: ${content.tags}</p>
        </div><br>`;
  }

}

