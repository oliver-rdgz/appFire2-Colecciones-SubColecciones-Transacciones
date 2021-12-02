import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { EventService } from "src/app/services/event/event.service";

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {
   
   eventName:string;
   eventDate:string;
   eventPrice: number;
   eventCost:number;
   
  constructor( private router:Router, private es:EventService) { }
  ngOnInit() {
  }

   createEvent(
    eventName:string,
    eventDate:string,
    eventPrice: number,
    eventCost:number
    ): void{

      if( eventName==undefined || eventDate==undefined ||eventPrice==undefined||  eventCost==undefined){
          return;
        }

        this.es.createEvent(eventName,eventDate,eventPrice,eventCost).then(()=>{
         this.router.navigateByUrl('/home2');
        });
     }
  


}
