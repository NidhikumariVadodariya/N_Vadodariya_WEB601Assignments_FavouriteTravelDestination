import { Component, OnInit, Input } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/contentDb';
import { MessageService } from './message.service';
import { MyFavouriteTravelDestinationsService } from './services/my-favourite-traveldestinations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WEB601_JS5_Assignment_8';
  contentItems: Content[] = [];
  content!: Content;
  @Input() topContent: Content | undefined;
  id: number = 1;

  constructor(private MyFavouriteTravelDestinationsService: MyFavouriteTravelDestinationsService,  private messagesService: MessageService) { }

  ngOnInit() {
    this.MyFavouriteTravelDestinationsService.getContent().subscribe(data => {
      this.messagesService.add('Content array loaded!');
      this.contentItems = data;
    });
    
  }

  showContentById() {
    const id = +this.id;
    if (isNaN(id) || id < 1 || id > CONTENT.length) {
      this.messagesService.add('Invalid id entered!');
      return;
    }
    this.MyFavouriteTravelDestinationsService.getContentById(id).subscribe(content => {
      this.topContent = content;
      this.messagesService.add(`Content Item at id: ${content.id}`);
    });
  }

}
