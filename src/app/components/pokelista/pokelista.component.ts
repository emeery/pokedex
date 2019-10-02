import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokeService } from './poke.service';
import { Subscription } from 'rxjs';
import { MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-pokelista',
  templateUrl: './pokelista.component.html',
  styleUrls: ['./pokelista.component.scss']
})

export class PokelistaComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Pokemon>(); // arreglo de Pokemon
  cols: string[] = ['id', 'nombre', 'tipo', 'imagen']; // columnas tabla lista
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; // paginacion Angular Material
  pokemonPorPagina = 5;
  pokemon: Pokemon[]; // arreglo de tipo Pokemon
  subs: Subscription; // subscripción al observable Pokemon
  constructor(
    private pokeServicio: PokeService
  ) {}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getPokemon();
  }
  getPokemon() {
    this.pokemon = this.pokeServicio.getPokemon();
    this.dataSource.data = this.pokemon;
    this.subs = this.pokeServicio.pokemonObservable
    .subscribe((poke: Pokemon[]) => {
      this.pokemon = poke;
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}



