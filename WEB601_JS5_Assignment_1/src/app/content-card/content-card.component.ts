import { Component } from '@angular/core';
//import { Content } from '../helper-files/content-interface';
import  { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor(){
    this.contentList = new ContentList();

    this.contentList.add({id: 0,
      country: "Greece",
      destination: "Santorini",
      imgURL: "https://www.santorini-island.com/santorini-photos/information-about-santorini-santorini-island-greece-139-e01d.jpg",
      food: "Aloo Tikki",
      type: "Family trip",
      tags: ["#goodspot"]
    })
  }
}
