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

    this.contentList.add({id: 1,
      country: "France",
      destination: "Paris",
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2E1p-QwK1xX0PN1CMiauhKTfxDF9R1D3-Wg&usqp=CAU",
      food: "Paani puri",
      type: "Friends trip",
      tags: ["#eyecatching"]
    })

    this.contentList.add({id: 2,
      country: "Switzerland",
      destination: "Geneva",
      imgURL: "https://a.cdn-hotels.com/gdcs/production125/d882/347f73d7-bd57-44cf-b3fa-0837c96cb193.jpg",
      food: "Bhel",
      type: "Solo trip",
      tags: ["#awesome"]
    })
  }
}
