import { Component, OnInit } from '@angular/core';
import {EventService} from "src/app/services/event/event.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  
  public currentEvent: any=[];
  public eventId: string;
  public nombre_invitado="";
  constructor(private es: EventService, public ar:ActivatedRoute) { }
   

  ngOnInit() {
    const eventId: string  = this.ar.snapshot.paramMap.get('id');
    this.es.getEventDetail(eventId).then(eventSnapshot=>{
       this.currentEvent= eventSnapshot.data();
       this.currentEvent.id=eventSnapshot.id;

    }); 
    }

    agregar_invitado(nombre_invitado: string): void{
      this.es.addGuest(nombre_invitado, this.currentEvent.id, this.currentEvent.price).then(()=>
       this.nombre_invitado=''); 
      }

   


}
