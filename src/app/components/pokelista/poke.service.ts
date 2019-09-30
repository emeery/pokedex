import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import {tipos, pokemon} from './pokejson';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private tiposA = tipos; // array
  private pokemonA = pokemon; // array
  pokemonObserva = new Subject<Pokemon[]>();
  private pokemon: Pokemon[] = [
    {
      pokemon: 'squirtle',
      tipo: '../../../assets/images/png/tipos/drop.png',
      imagen: '../../../assets/images/png/pokemon/squirtle.png'
    },
    {
      pokemon: ' pikachu',
      tipo: '../../../assets/images/png/tipos/flash.png',
      imagen: '../../../assets/images/png/pokemon/pikachu.png'
    },
    {
      pokemon: 'mew',
      tipo: '../../../assets/images/png/tipos/psychic.png',
      imagen: '../../../assets/images/png/pokemon/mew.png'
    },
    {
      pokemon: 'charmander',
      tipo: '../../../assets/images/png/tipos/flame.png',
      imagen: '../../../assets/images/png/pokemon/charmander.png'
    },
  ];
  constructor(
      private http: HttpClient,
      private router: Router
    ) { }
  getPokemon() {
      return this.pokemon;
  }
  getPokeArray() {
    return this.pokemonA;
  }
  getTiposArray() {
    return this.tiposA;
  }
  addPokemon(poke: Pokemon) {
    poke.imagen = '../../../assets/images/png/pokemon/' + poke.pokemon  + '.png';
    poke.tipo = '../../../assets/images/png/tipos/' + poke.tipo + '.png';
    this.pokemon.push(poke);
    this.pokemonObserva.next(this.pokemon.slice());
    this.router.navigate(['/pokemones']);
  }

  }
