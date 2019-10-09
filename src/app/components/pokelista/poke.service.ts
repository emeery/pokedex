import { Injectable } from '@angular/core';
import { Pokemoni } from '../models/pokemon.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  // pokemonObservable = new Subject<Pokemon[]>();
  private pokemon: Pokemoni[] = [];
  // selectedFilas: Array<Pokemon> = [];
  url = environment.url;
  imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  constructor(
    private router: Router,
    private http: HttpClient) {}
  getP() {
    const get = this.http.get(`${this.url}/pokemon?limit=20`).pipe(
      map(res => {
        console.log('res', res);
        return res[`results`];
      }),
      map(pk => {
        return {
          pokemon: pk.map((pokem, i) => {
            return {
              pokemon: pokem.name,
              icono: this.getIcon(i + 1),
              url: pokem.url
            };
          })
        };
      })
    );
    return get;
  }
  getIcon(i: number) {
    return this.imgUrl + i + '.png';
  }

  // getPokemon() {
  //   return this.pokemon;
  // }
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
