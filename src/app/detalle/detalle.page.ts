import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibliotecaService } from '../biblioteca/services/biblioteca-service.service';
import { StorageService } from '../services/storage-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  libro:any
  listafavorito:any[]=[]
  constructor(private activateRoudte: ActivatedRoute,
    private bibliotecaService: BibliotecaService,
    private storageService:StorageService) {
     }


    async ngOnInit() {
    this.verLibroDetalle();
  }

  verLibroDetalle(){

    this.bibliotecaService.verLibro(this.activateRoudte.snapshot.params['id'])
    .subscribe({
      next: resp=>{this.libro=resp,this.libro = this.libro.docs[0]}
    });

  }

  async guardarLibro(){
    this.storageService.get("libro").then((resp) =>{this.listafavorito.push(resp)})
    await this.storageService.set("libro",this.listafavorito)
  }

}
