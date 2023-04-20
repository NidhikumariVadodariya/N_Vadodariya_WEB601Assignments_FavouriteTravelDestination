import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MessagesService } from './services/messages.service';
import { MyFavouriteTravelDestinationsService } from './services/my-favourite-traveldestinations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WEB601_JS5_Assignment_6';
  name: string="Nidhi";
  contentCard: any;
  errorMessage: any;
  id: any;
 
constructor(private contentService: MyFavouriteTravelDestinationsService,
    private messageService: MessagesService) { }



  onRetrieveContentCard(): void {
    // Reset the error message
    this.errorMessage = '';

   

    const idNumber = parseInt(this.id);

    if (isNaN(idNumber) || idNumber < 1) {
      this.errorMessage = 'Invalid ID number entered';
      this.messageService.addMessageService(this.errorMessage);
      return;
    }
    debugger
    this.contentService.getTravels().subscribe((content: string | any[]) => {
      if (idNumber > content.length) {
        this.errorMessage = 'Invalid ID number entered';
        this.messageService.addMessageService(this.errorMessage);
       
      }
      else{
        this.contentService.getTravelsById(idNumber).subscribe(
          (contentCard: any) => {
            this.contentCard = contentCard;
            this.messageService.addMessageService(`Content Card at ID ${idNumber} retrieved`);
          },
          (error: any) => {
            this.errorMessage = 'Error retrieving content card';
            this.messageService.addMessageService(this.errorMessage);
          }
        );
      }
    });

    
    
  }


}

  
