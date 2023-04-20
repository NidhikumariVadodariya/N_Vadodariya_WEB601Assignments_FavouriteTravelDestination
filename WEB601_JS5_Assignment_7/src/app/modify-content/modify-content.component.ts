import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MyFavouriteTravelDestinationsService } from '../services/my-favourite-traveldestinations.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();

  newContent: Content = {
    country: '',
    destination: '',
    food: '',
    imgURL: '',
    type: '',
    tags: [],
    id: 0,
  }

  constructor(private MyFavouriteTravelDestinationsService: MyFavouriteTravelDestinationsService) { }

  addContent(): void {
    console.log('addContent() called emit');

    this.MyFavouriteTravelDestinationsService
      .addContent(this.newContent)
      .subscribe(newContent  => { 
        console.log('addContent() called emit'); 
        this.contentAdded.emit(newContent);
        this.newContent = {
          id: 0,
          country: '',
          destination: '',
          food: '',
          imgURL: '',
          type: '',
          tags: [],
        };

      });
      
  }
}
