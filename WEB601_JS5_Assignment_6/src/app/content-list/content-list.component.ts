import { Component, Input, OnInit } from '@angular/core';
// import { ContentList } from '../helper-files/content-list';

import { Content } from '../helper-files/content-interface';
import { MessagesService } from '../services/messages.service';
import { MyFavouriteTravelDestinationsService } from '../services/my-favourite-traveldestinations.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
	
  contentArray: Content[] = [];
  //contentArray: Content[];
	
	ngOnInit(): void {
		this.contentService.getTravels().subscribe((content: Content[]) => {
      this.contentArray = content;
		});
	  }
	 
  constructor(private contentService: MyFavouriteTravelDestinationsService)
	  {
		
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

}

