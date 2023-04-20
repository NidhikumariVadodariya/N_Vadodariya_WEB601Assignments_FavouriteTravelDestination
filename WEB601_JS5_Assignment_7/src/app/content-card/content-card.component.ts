import { Component, Input } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})

export class ContentCardComponent  {
  @Input() item: any;
  @Input() boxShadow!: boolean;

  isFirst: boolean = false;
  isLast: boolean = false;
  

  @Input()contentItems!: Content;

  log(){
    console.log("ID: " + this.item.id);
    console.log("Country: " + this.item.country);
  }
  
  get cardClasses() {
    return {
      'content-card': true,
      'content-card-shadow': this.boxShadow
    };
  }
}
