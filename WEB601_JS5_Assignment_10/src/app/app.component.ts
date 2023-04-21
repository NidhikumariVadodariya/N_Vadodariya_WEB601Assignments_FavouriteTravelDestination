import { ApplicationRef, Component, OnInit, Input } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/contentDb';
import { MessageService } from './message.service';
import { MyFavouriteTravelDestinationsService } from './services/my-favourite-traveldestinations.service';
import { UpdateCheckerService } from './update-checker.service';
import { SwUpdate } from '@angular/service-worker';
import { first, interval, concat } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WEB601_JS5_Assignment_10';
  contentItems: Content[] = [];
  content!: Content;
  @Input() topContent: Content | undefined;
  id: number = 1;

  constructor(private MyFavouriteTravelDestinationsService: MyFavouriteTravelDestinationsService, private messagesService: MessageService, private updateChecker: UpdateCheckerService, private appRef: ApplicationRef,
    private updates: SwUpdate) { }

  ngOnInit() {
    this.MyFavouriteTravelDestinationsService.getContent().subscribe(data => {
      this.messagesService.add('Content array loaded!');
      this.contentItems = data;
    });

    this.updateChecker.init();

    const appIsStable$ = this.appRef.isStable.pipe(
      first(isStable => isStable === true));
    const everyHour$ = interval(1 * 60 * 60 * 1000);
    const everyHourOnceAppIsStable$ = concat(appIsStable$, everyHour$);

    everyHourOnceAppIsStable$.subscribe(
      () => this.updates.checkForUpdate()
    );
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
