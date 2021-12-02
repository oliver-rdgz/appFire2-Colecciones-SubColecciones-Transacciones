import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from "@angular/router";
import { FirestoreService } from "src/app/services/data/firestore.service";
import {AlertController  } from "@ionic/angular";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
   song: any={}; 
   sondId:any;
  constructor(private fs:FirestoreService, 
    private Ar:ActivatedRoute,
     private router:Router,
     public AC: AlertController ) { }

  ngOnInit() {
   this.sondId= this.Ar.snapshot.paramMap.get('id');
   this.song= this.fs.obtenerDetalleCancion(this.sondId).valueChanges();

  }

  async borrarC(){
     const Alert= await this.AC.create({ message:' Estas seguro que deseas eliminar esta cancion?', buttons: [

     {  text: 'Cancel', role: 'cancel' , handler: blah=>{   

         console.log('Comfirma eliminacion: blah');
     },   
   },  { text: 'Okay', handler:()=> {   this.fs.borrarCancion(this.sondId).then(()=> { this.router.navigateByUrl('');  });


      },
     },] });
    await Alert.present();
  }
}