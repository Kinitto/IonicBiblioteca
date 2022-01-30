import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/libro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  url : string = "http://openlibrary.org/search.json?q=OL23919A";
  listaLibros : Libro[] = [];

  constructor(private httpService: HttpClient) { }

  buscarLibros(): Observable<Libro[]>{
    return this.httpService.get<Libro[]>(this.url);

  }
}
