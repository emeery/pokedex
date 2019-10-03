import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokeService } from './poke.service';
import { Subscription } from 'rxjs';
import { MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ModalComponent } from './modal/modal.component';
@Component({
  selector: 'app-pokelista',
  templateUrl: './pokelista.component.html',
  styleUrls: ['./pokelista.component.scss']
})

export class PokelistaComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Pokemon>(); // arreglo de Pokemon
  cols: string[] = ['select', 'id', 'nombre', 'tipo', 'imagen']; // columnas tabla lista
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; // paginacion Angular Material
  selection = new SelectionModel<Pokemon>(true, []);
  selectedFilas: Array<Pokemon> = [];
  checked = false;
  pokemonPorPagina = 5;
  pokemon: Pokemon[]; // arreglo de tipo Pokemon
  subs: Subscription; // subscripción al observable Pokemon
  constructor(
    private pokeServicio: PokeService,
    public dlg: MatDialog
  ) {}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getPokemon();
  }
  getPokemon() { // lista pokemon
    this.pokemon = this.pokeServicio.getPokemon();
    this.dataSource.data = this.pokemon;
    this.subs = this.pokeServicio.pokemonObservable
    .subscribe((poke: Pokemon[]) => {
      this.pokemon = poke;
    });
  }
  makeFiltro(v: string) {
    this.dataSource.filter = v.trim().toLocaleLowerCase();
  }
  // Selecciona todas las filas si no están todas seleccionadas; de lo contrario, selección clara
  masterToggle(ref) {
    // console.log(ref.checked); // true o false
    if (this.isSomeSelected()) {
      this.selection.clear();
      ref.checked = false;
    } else {
      this.isAllSelected() ?
      this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
    }
  }
  // Si el número de elementos seleccionados coincide con el número total de filas.
  isAllSelected() {
    const numSeleccion = this.selection.selected.length;
    const numColumnas = this.dataSource.data.length; // columnas
    return numSeleccion === numColumnas;
  }
  isSomeSelected() {
    return this.selection.selected.length > 0;
  }
  store() {
    setTimeout(() => {
      this.selectedFilas = this.selection.selected;
      this.pokeServicio.addSeleccion(this.selectedFilas);
    });
  }
  openPokemon() {
    this.dlg.open(ModalComponent, {
      panelClass: 'custom-modalito'
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}



