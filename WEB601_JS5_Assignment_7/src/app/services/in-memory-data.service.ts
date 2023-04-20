import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const content: Content[] =  [
    {
        id: 1,
        country: "India",
        destination: "Rajasthan",
        imgURL: "https://www.clubmahindra.com/blog/media/section_images/shuttersto-67d5d542923acf6.jpg",
        food: "Pani-Puri",
        type: "Family",
        tags: ["#fabulous"]
    },
    {
        id: 2,
        country: "France",
        destination: "Paris",
        imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2E1p-QwK1xX0PN1CMiauhKTfxDF9R1D3-Wg&usqp=CAU",
        food: "Paani puri",
        type: "Friends",
        tags: ["#eyecatching"]
    },
    {
      id: 3,
      country: "Switzerland",
      destination: "Geneva",
      imgURL: "https://a.cdn-hotels.com/gdcs/production125/d882/347f73d7-bd57-44cf-b3fa-0837c96cb193.jpg",
      food: "Bhel",
      type: "",
        tags: ["#awesome"]
    },
    {
      id: 4,
      country: "Greece",
      destination: "Santorini",
      imgURL: "https://www.santorini-island.com/santorini-photos/information-about-santorini-santorini-island-greece-139-e01d.jpg",
      food: "Aloo Tikki",
      type: "Family",
      tags: ["#goodspot"]
    },
    {
      id: 5,
      country: "Egypt",
      destination: "Cairo",
      imgURL: "https://economictimes.indiatimes.com/thumb/msid-58084960,width-1200,height-900,resizemode-4,imgsize-133701/how-egypt-offers-a-captivating-canvas-of-the-past-and-the-present.jpg?from=mdr",
      food: "Vadapav",
      type: "Friends",
      tags: ["#eyesoothing"]
    },
    {
      id: 6,
      country: "Dubai",
      destination: "Abu Dhabi",
      imgURL: "https://www.planetware.com/wpimages/2020/11/united-arab-emirates-abu-dhabi-to-dubai-best-ways-to-get-there-by-car.jpg",
      food: "Dabeli",
      type: "",
      tags: ["#goodtrip"]
    },
    {
      id: 7,
      country: "United States",
      destination: "New York",
      imgURL: "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg?w=636&h=358",
      food: "Bhajiya",
      type: "Solo",
      tags: ["#amazing"]
    }
  ];
    return { content };
  }

  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c => c.id || 0)) + 1 : 8; // the ||0 is to accept null values for id
  }
}
