import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentDb } from '../helper-files/contentDb';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class MyFavouriteTravelDestinationsService {

  constructor(private messageService: MessagesService) { }
  
  getTravels(): Observable<any> {
    this.messageService.addMessageService('Content array loaded!');
    return of(contentDb);
  }
  getTravelsById(id: number): Observable<any> {
    this.messageService.addMessageService(`Content Item at id: ${id}`);
    return of(contentDb.find(content => content.id === id)); // find id 1
  }
}
