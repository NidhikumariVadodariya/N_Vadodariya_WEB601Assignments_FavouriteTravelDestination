//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 1,
        country: "Greece",
        destination: "Santorini",
        imgURL: "https://www.santorini-island.com/santorini-photos/information-about-santorini-santorini-island-greece-139-e01d.jpg",
        food: "Aloo Tikki",
        type: "Family trip",
        tags: ["#goodspot"]
      },
      {
        id: 2,
        country: "Greece",
        destination: "Santorini",
        imgURL: "https://www.santorini-island.com/santorini-photos/information-about-santorini-santorini-island-greece-139-e01d.jpg",
        food: "Aloo Tikki",
        type: "Family trip",
        tags: ["#goodspot"]
      },
      {
        id: 3,
        country: "Greece",
        destination: "Santorini",
        imgURL: "https://www.santorini-island.com/santorini-photos/information-about-santorini-santorini-island-greece-139-e01d.jpg",
        food: "Aloo Tikki",
        type: "Family trip",
        tags: ["#goodspot"]
      },
      {
        id: 4,
        country: "Greece",
        destination: "Santorini",
        imgURL: "https://www.santorini-island.com/santorini-photos/information-about-santorini-santorini-island-greece-139-e01d.jpg",
        food: "Aloo Tikki",
        type: "Family trip",
        tags: ["#goodspot"]
      },
      {
        id: 5,
        country: "Greece",
        destination: "Santorini",
        imgURL: "https://www.santorini-island.com/santorini-photos/information-about-santorini-santorini-island-greece-139-e01d.jpg",
        food: "Aloo Tikki",
        type: "Family trip",
        tags: ["#goodspot"]
      },
      {
        id: 6,
        country: "Greece",
        destination: "Santorini",
        imgURL: "https://www.santorini-island.com/santorini-photos/information-about-santorini-santorini-island-greece-139-e01d.jpg",
        food: "Aloo Tikki",
        type: "Family trip",
        tags: ["#goodspot"]
      },
      {
        id: 7,
        country: "Greece",
        destination: "Santorini",
        imgURL: "https://www.santorini-island.com/santorini-photos/information-about-santorini-santorini-island-greece-139-e01d.jpg",
        food: "Aloo Tikki",
        type: "Family trip",
        tags: ["#goodspot"]
      }
    ];
  }
}
