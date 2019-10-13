import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  // private pokemon; // ?
  url = environment.url;
  // pokemonObservable = new Subject<Pokemon[]>();
  // selectedFilas: Array<Pokemon> = [];
  imgurl = environment.imgurl;
  index: number;
  constructor(
    private router: Router,
    private http: HttpClient) {}
  getP() {
    const get = this.http.get(`${this.url}/pokemon?limit=151`) // 1st g.
    .pipe(
      map(res => {
        return res[`results`];
      }),
      map(pk => {
        return {
          pokemon: pk.map((pokem, i) => {
            return {
              pokemon: pokem.name,
              icono: this.getIcon(i + 1),
              url: pokem.url,
            };
          })
        };
      })
    );
    return get;
  }
  getDescription(i: number) {
    console.log(i );
    const des = this.http.get(`${this.url}/pokemon-species/${i}`)
    .pipe(
      map(poke => {
        return poke;
      })
    );
    return des;
  }
  getIcon(i: number) {
    return this.imgurl + i + '.png';
  }
  getPokeDetails(i) {
    this.index = i;
    const details = this.http.get(`${this.url}/pokemon/${this.index}/`)
    .pipe(
      map(poke => poke)
    );
    return details;
  }
  getIndex() {
    return this.index;
  }
  addSeleccion(selec) {
    // this.selectedFilas = selec;
  }
  getSeleccion() {
    // return this.selectedFilas;
  }
}
