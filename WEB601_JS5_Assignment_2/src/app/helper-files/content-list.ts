import { Content } from './content-interface';

export class ContentList {

  private _items: Content[];

  constructor() {
    this._items = [];
  }

  getItems(): Content[] {
    return this._items;
  }

  addFunction(contentItem: Content) {
    return this._items.push(contentItem);
  }

  getLength() {
    return this._items.length;
  }

  printIndex(index: number): string {
    let readerFriendlyHtml = `<div>`;
    readerFriendlyHtml += `<p>` + this._items[index].country + `<p>`;
    readerFriendlyHtml += `<p>` + this._items[index].destination + `<p>`;
    readerFriendlyHtml += `<p>` + this._items[index].imgURL + `<p>`;
    readerFriendlyHtml += `<p>` + this._items[index].food + `<p>`;
    readerFriendlyHtml += `<img src ="` + this._items[index].type + `">`;
    readerFriendlyHtml += `</div>`;
    return readerFriendlyHtml;
  }
}
