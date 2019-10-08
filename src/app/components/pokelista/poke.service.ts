import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  pokemonObservable = new Subject<Pokemon[]>();
  // private pokemon: Pokemon[] = [
  //   // arreglo estático de pokemon
  //   {
  //     pokemon: "squirtle",
  //     tipo: "../../../assets/images/png/tipos/drop.png",
  //     imagen: "../../../assets/images/png/pokemon/squirtle.png"
  //   },
  //   {
  //     pokemon: " pikachu",
  //     tipo: "../../../assets/images/png/tipos/flash.png",
  //     imagen: "../../../assets/images/png/pokemon/pikachu.png"
  //   },
  //   {
  //     pokemon: "mew",
  //     tipo: "../../../assets/images/png/tipos/psychic.png",
  //     imagen: "../../../assets/images/png/pokemon/mew.png"
  //   },
  //   {
  //     pokemon: "charmander",
  //     tipo: "../../../assets/images/png/tipos/flame.png",
  //     imagen: "../../../assets/images/png/pokemon/charmander.png"
  //   }
  // ];
  selectedFilas: Array<Pokemon> = [];
  url = environment.url;
  imgUrl = environment.urlimg;
  constructor(private router: Router, private http: HttpClient) {}
  getP() {
    const get = this.http.get(`${this.url}/pokemon?limit=25`).pipe(
      map(res => {
        return res[`results`];
      }),
      map(pk => {
        return {
          pokemon: pk.map((poke, i) => {
            return {
              pokemon: poke.name,
              icono: this.getIcon(i + 1),
            };
          })
        };
      })
    );
    return get;
  }
  getIcon(i: number) {
    console.log(`${this.imgUrl}${i}.png`);
    // const ee = `${this.imgUrl}${index}.png`;
    // console.log(ee);
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
    this.selectedFilas = selec;
  }
  getSeleccion() {
    return this.selectedFilas;
  }
}
