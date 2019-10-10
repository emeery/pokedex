import { Injectable } from '@angular/core';
import { Pokemoni } from '../models/pokemon.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  // pokemonObservable = new Subject<Pokemon[]>();
  private pokemon;
  // selectedFilas: Array<Pokemon> = [];
  url = environment.url;
  imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  index: number;
  constructor(
    private router: Router,
    private http: HttpClient) {}
  getP() {
    const get = this.http.get(`${this.url}/pokemon?limit=20`)
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
    const des = this.http.get(`${this.url}/pokemon-species/${i}`)
    .pipe(
      map(poke => {
        return poke;
      })
    );
    return des;
  }
  getIcon(i: number) {
    return this.imgUrl + i + '.png';
  }
  setPokeDetails(i: number) {
    this.index = i;
    const details = this.http.get(`${this.url}/pokemon/${i}`)
    .pipe(
      map(poke => poke)
    );
    return details;
  }
  getIndex() {
    return this.index;
  }
  // addPokemon(poke: Pokemon) {
  //   poke.imagen = "../../../assets/images/png/pokemon/" + poke.pokemon + ".png";
  //   poke.tipo = "../../../assets/images/png/tipos/" + poke.tipo + ".png";
  //   this.pokemon.push(poke);
  //   this.pokemonObservable.next(this.pokemon.slice());
  //   this.router.navigate(["/pokemon"]);
  // }
  addSeleccion(selec) {
    // this.selectedFilas = selec;
  }
  getSeleccion() {
    // return this.selectedFilas;
  }
}
