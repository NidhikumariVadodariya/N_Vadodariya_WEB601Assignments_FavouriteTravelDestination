import { keyframes } from "@angular/animations";
import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentArray: Content[];
  country: string = '';
  isTitleExists: boolean | null = null;
  errTxt: boolean = false;

loggingTitle(content: any){
  console.log(`ID: ${content.id}`);
  console.log(`Country: ${content.country}`);
}

  searchTerm = '';
  searchResults: Content[] = [];
  searchExists = false;

  checkExistence() {
    /*
    if (this.searchTerm.trim() === '')
    {
      this.searchExists = false;
      return;
    }
    */
    this.searchResults = this.contentArray.filter(item => item.country.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.searchExists = this.searchResults.length > 0;
  }

addContent(newContent: Content){
  const AddPromise = new Promise((resolve, reject) => {
    this.contentArray.push(newContent);
    this.contentArray = [...this.contentArray];
    resolve(newContent.country);
  });

  AddPromise.then(title => {
    console.log(`Content Added successfully, Country: ${this.country}`);
    this.errTxt = false;
  }).catch(err => {
    this.errTxt = true;
  });
  
}

searchForTitle(){
  this.isTitleExists = this.contentArray.some(content => content.country === this.country);
}

  constructor() {
    this.contentArray = [
      {
        id: 1,
        country: "India",
        destination: "Rajasthan",
        imgURL: "https://www.clubmahindra.com/blog/media/section_images/shuttersto-67d5d542923acf6.jpg",
        food: "Pani-Puri",
        type: "Family",
        tags: ["#fabulous"],
      },
      {
        id: 2,
        country: "France",
        destination: "Paris",
        imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2E1p-QwK1xX0PN1CMiauhKTfxDF9R1D3-Wg&usqp=CAU",
        food: "Paani puri",
        type: "Friends",
        tags: ["#eyecatching"],
      },
      {
        id: 3,
        country: "Switzerland",
        destination: "Geneva",
        imgURL: "https://a.cdn-hotels.com/gdcs/production125/d882/347f73d7-bd57-44cf-b3fa-0837c96cb193.jpg",
        food: "Bhel",
        type: "",
        tags: ["#awesome"],
      },
      {
        id: 4,
        country: "Greece",
        destination: "Santorini",
        imgURL: "https://www.santorini-island.com/santorini-photos/information-about-santorini-santorini-island-greece-139-e01d.jpg",
        food: "Aloo Tikki",
        type: "Family",
        tags: ["#goodspot"],
      },
      {
        id: 5,
        country: "Egypt",
        destination: "Cairo",
        imgURL: "https://economictimes.indiatimes.com/thumb/msid-58084960,width-1200,height-900,resizemode-4,imgsize-133701/how-egypt-offers-a-captivating-canvas-of-the-past-and-the-present.jpg?from=mdr",
        food: "Vadapav",
        type: "Friends",
        tags: ["#eyesoothing"],
      },
      {
        id: 6,
        country: "Dubai",
        destination: "Abu Dhabi",
        imgURL: "https://www.planetware.com/wpimages/2020/11/united-arab-emirates-abu-dhabi-to-dubai-best-ways-to-get-there-by-car.jpg",
        food: "Dabeli",
        type: "",
        tags: ["#goodtrip"],
      },
      {
        id: 7,
        country: "United States",
        destination: "New York",
        imgURL: "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg?w=636&h=358",
        food: "Bhajiya",
        type: "Solo",
        tags: ["#amazing"],
      }
    ];
  }

}
