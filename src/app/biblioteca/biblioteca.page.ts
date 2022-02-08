import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from './interfaces/libro';
import { BibliotecaService } from './services/biblioteca-service.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  libros: any
  constructor(private bibliotecaService: BibliotecaService,  private router: Router) { }

  ngOnInit() {
    this.obtenerLibros()
  }

  obtenerLibros(){
    this.bibliotecaService.buscarLibros("dragon+ball").subscribe({
      next: resp=>{this.libros=resp, this.libros= this.libros.docs},
           error:err=>{console.log(err)}
    });

    }
    detalle(libro:any){
      this.router.navigateByUrl('/detalle/'+libro);
    }

    busqueda(palabra: string) {
      this.bibliotecaService.buscarLibros(palabra).subscribe({
        next: resp=>{this.libros=resp, this.libros= this.libros.docs},
             error:err=>{console.log(err)}
      });
  }




}
