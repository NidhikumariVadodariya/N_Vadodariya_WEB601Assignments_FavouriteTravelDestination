import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MyFavouriteTravelDestinationsService } from '../services/my-favourite-traveldestinations.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContentDialogComponent } from '../content-dialog/content-dialog.component';
import { MessageService } from '../message.service';

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

  constructor(private MyFavouriteTravelDestinationsService: MyFavouriteTravelDestinationsService, private dialog: MatDialog, private messagesService: MessageService) {}

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

  openDialog(): void {
    const dialogRef: MatDialogRef<ContentDialogComponent> = this.dialog.open(ContentDialogComponent, {
      width: '500px',
      data: { country: 'Add Country' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.messagesService.add(`Content added: ${result.country}`);
        this.contentAdded.emit(result);
        this.MyFavouriteTravelDestinationsService.addContent(result).subscribe();
      }
      dialogRef.componentInstance.contentAdded.subscribe((content: Content) => {
        console.log(`Content added: ${content.country}`);
        this.contentAdded.emit(content);
      });
    });
  }

  }
