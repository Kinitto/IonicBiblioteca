import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../biblioteca/interfaces/libro';
import { BibliotecaService } from '../biblioteca/services/biblioteca-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  libro:any
  constructor(private activateRoudte: ActivatedRoute,private bibliotecaService: BibliotecaService) { }

  ngOnInit() {
    this.verLibroDetalle();
  }

  verLibroDetalle(){

    this.bibliotecaService.verLibro(this.activateRoudte.snapshot.params['id'])
    .subscribe({
      next: resp=>{this.libro=resp,this.libro = this.libro.docs[0]}
    });

  }

}