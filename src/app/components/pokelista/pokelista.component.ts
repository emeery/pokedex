import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokeService } from './poke.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokelista',
  templateUrl: './pokelista.component.html',
  styleUrls: ['./pokelista.component.scss']
})
export class PokelistaComponent implements OnInit {
  pokemon: Pokemon[];
  cols = ['id', 'nombre', 'tipo', 'imagen'];
  dataSource;
  subs: Subscription;
  constructor(
    private pokeServicio: PokeService
  ) {}

  ngOnInit() {
    this.subs = this.pokeServicio.pokemonObserva
    .subscribe((poke: Pokemon[]) => { console.log(poke); });
    this.getPokemon();
  }
  getPokemon() {
    this.pokemon = this.pokeServicio.getPokemon();
    this.dataSource = this.pokemon;
  }
}
