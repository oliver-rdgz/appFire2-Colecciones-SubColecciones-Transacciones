import { Component } from '@angular/core';
import { FirestoreService } from "src/app/services/data/firestore.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   songList:any=[]; 

  constructor( private FS:FirestoreService, private rouuter:Router) {}
  
  ngOnInit(){

     this.songList= this.FS.obtenerListaCancion().valueChanges();

   }

}
