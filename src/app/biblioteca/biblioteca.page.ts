import { Component, OnInit } from '@angular/core';
import { Libro } from './interfaces/libro';
import { BibliotecaService } from './services/biblioteca-service.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  libros: Libro[]=[]

  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit() {
    this.obtenerLibros()
  }

  obtenerLibros(){
    this.bibliotecaService.buscarLibros().subscribe(resp=>
      {
        this.libros = resp ;
        console.log(this.libros)
      })
  }


}
