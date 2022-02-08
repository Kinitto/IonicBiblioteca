import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/libro';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  url : string = "http://openlibrary.org/search.json";
  listaLibros : Libro[] = [];

  constructor(private httpService: HttpClient) { }

  buscarLibros(palabra:string): Observable<Libro[]>{
    const params = new HttpParams()
    .set('title', palabra)
    .set("limit", "10");
    return   this.httpService.get<Libro[]>(this.url,{params});

  }

  verLibro(alpha:string){
    let url: string = `${this.url}?q=${alpha}`;
    return this.httpService.get<Libro>(url);
  }
}
