import { NgClass } from '@angular/common';
import { Component, Input, OnInit  } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MyFavouriteTravelDestinationsService } from '../services/my-favourite-traveldestinations.service';
import { Observable, of } from 'rxjs';
import { FilterContentPipe } from '../filter-content.pipe';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
  providers: [FilterContentPipe]
})
export class ContentListComponent implements OnInit {
  contentItems: Content[]= [];
  searchText : string = "";
  message: string = "";
  filteredContent: Content[] = [];
  content: Content[] = [];
  types: string[] = [];
  selectedType: string | null = null;
  

  constructor(private MyFavouriteTravelDestinationsService: MyFavouriteTravelDestinationsService, private filterContentPipe:FilterContentPipe) { }

  ngOnInit() {
    this.getContent(); 
  }

  getContent(): void {
    this.MyFavouriteTravelDestinationsService.getContent().subscribe((content) => {
      this.contentItems = content;
      this.filteredContent = content;
      console.log(`filter content: ${this.filteredContent}`)
      this.getTypes();
      this.updateHighestId(content);
    
    });
    
  }

  getTypes() {
    const types = new Set<string>();
    this.contentItems.forEach((content) => {
      if (content?.type) {
        types.add(content.type);
      }
    });
    this.types = Array.from(types);
  }

  updateHighestId(contentList: Content[]) {
    let highestId = 0;
    contentList.forEach(content => {
      if (content.id && content.id > highestId) {
        highestId = content.id;
      }
    });
    ContentListComponent.highestId = highestId + 1; // increment highestId by 1
  }
    
    static highestId = 0;

    
    onContentAdded(content: Content) {
      console.log(`${content}`);
      content.id = ++ContentListComponent.highestId;
      console.log('Adding content...');
    
      this.MyFavouriteTravelDestinationsService.addContent(content).subscribe(newContent => {
        if (newContent && newContent.id) {
          this.contentItems.push(newContent);
          this.getTypes();
          console.log(`Added content with id ${newContent.id}`);
          
          // filter the contentItems array based on the selected type
          if (this.selectedType) {
            this.filteredContent = this.filterContentPipe.transform(this.contentItems, this.selectedType);
          } else {
            this.filteredContent = this.contentItems;
          }
        }
        
        ContentListComponent.highestId = this.contentItems[0]?.id || 0;
        console.log(`${content.id}`);
        console.log(this.contentItems);
        this.getContent();
      });
    }
       

    onTypeSelected(type: string | null) {
      if (type) {
        this.selectedType = type;
        this.filteredContent = this.filterContentPipe.transform(this.contentItems, this.selectedType);
      } else {
        this.filteredContent = this.contentItems;
      }
    }

  onSearch() {
    const result = this.contentItems.find(content => content.country === this.searchText);
    console.log(result);
    if(result) {
      this.message = "Content with this country exists";
    }
    else{
      this.message = "Content with this country does not exist";
    }
  }

}
