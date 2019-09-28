import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  // url: enviroment.url
  constructor(
    private http: HttpClient
  ) { }
  getPokemones() {
     return this.http.get(environment.url);
  }
}
