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
  getPokemon() {
    const get = this.http.get(`${this.url}/pokemon?limit=151`) // 1st g.
    .pipe(
      map(res => {
        return res[`results`];
      }),
      map(pk => {
        return {
          pokemon: pk.map((pokem, i) => {
            return {
              id: ++i,
              pokemon: pokem.name,
              icono: this.getIcon(i),
              url: pokem.url,
            };
          })
        };
      })
    );
    return get;
  }
  getDescription(i: number) {
    const des = this.http.get(`${this.url}/pokemon-species/${i}`)
    .pipe(
      map(poke => {
        return poke;
      })
    );
    return des;
  }
  getPokeDetails(i) {
    this.index = i;
    console.log(this.index);
    const details = this.http.get(`${this.url}/pokemon/${this.index}/`)
    .pipe(
      map(poke => poke)
    );
    return details;
  }
  getFilter(busqueda) {
    const b = this.http.get(`${this.url}/pokemon/${busqueda}`)
    .pipe(map(poke => {
      return poke ;
    }));
    return b;
  }
  getIndex() {
    return this.index;
  }
  getIcon(i: number) {
    return this.imgurl + i + '.png';
  }
  // addSeleccion(selec) {
  //   // this.selectedFilas = selec;
  // }
  // getSeleccion() {
  //   // return this.selectedFilas;
  // }
}
