import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../message.service';
import { MyFavouriteTravelDestinationsService } from '../services/my-favourite-traveldestinations.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  content$!: Observable<Content>;
  
  constructor(
    private travelService: MyFavouriteTravelDestinationsService ,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.content$ = this.travelService.getContentById(id);
    this.content$.subscribe(content => {
      this.messageService.add(`ContentDetailComponent: Loaded content with id=${content.id} and country=${content.country}`);
    });
  }

  goBack(): void {
    this.router.navigate(['/list']);
  }

}
