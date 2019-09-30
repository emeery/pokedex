import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  tipos: string[] = [
    '../../../assets/images/png/drop.png', // agua
    '../../../assets/images/png/flash.png', // electrico
    '../../../assets/images/png/psychic.png', // psiquico
    '../../../assets/images/png/flame.png' // fuego
  ];
  pokemonObserva = new Subject<Pokemon[]>();
  private pokemon: Pokemon[] = [
    {
      nombre: 'Squirtle',
      tipo: this.tipos[0],
      imagen: '../../../assets/images/png/squirtle.png'
    },
    {
      nombre: ' Pikachu',
      tipo: this.tipos[1],
      imagen: '../../../assets/images/png/pikachu.png'
    },
    {
      nombre: 'Mew',
      tipo: this.tipos[2],
      imagen: '../../../assets/images/png/mew.png'
    },
  ];
  constructor(
      private http: HttpClient,
      private router: Router
    ) { }
  getPokemones() {
      return this.pokemon;
    }
  addPokemon(poke: Pokemon) {
    poke.imagen = '../../../assets/images/png/' + poke.nombre + '.png';
    console.log(poke.imagen);
    this.pokemon.push(poke);
    this.pokemonObserva.next(this.pokemon.slice());
    this.router.navigate(['/pokemones']);
  }

  }
