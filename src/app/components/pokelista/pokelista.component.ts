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
  dataSource = new MatTableDataSource<Pokemon>(); // arreglo de tipo Tabla/Pokemon
  cols: string[] = ['select', 'id', 'nombre', 'tipo', 'imagen']; // columnas tabla lista
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; // paginacion Angular Material
  selection = new SelectionModel<Pokemon>(true, []);
  selectedFilas: Array<Pokemon> = [];
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
    this.getPo();
  }
  getPo() {
    this.pokeServicio.getP().subscribe(res =>  console.log(res));
  }
  getPokemon() { // lista pokemon
    // this.pokemon = this.pokeServicio.getPokemon();
    // this.dataSource.data = this.pokemon;
    // this.subs = this.pokeServicio.pokemonObservable
    // .subscribe((poke: Pokemon[]) => {
    //   this.pokemon = poke;
    // });
    this.pokeServicio.getOye();
  }
  makeFiltro(v: string) {
    this.dataSource.filter = v.trim().toLocaleLowerCase();
  }
  // Selecciona todas las filas si no están todas seleccionadas
  // de lo contrario, selección clara
  masterToggle(ref) {
    // console.log(this.isSomeSelected());
    if (this.isSomeSelected()) {
      this.selection.clear();
      // console.log(ref);
    } else {
      console.log(ref);
      this.isAllSelected() ?
      this.selection.clear() : this.dataSource.data.forEach(
        row => {
          this.selection.select(row);
          console.log(this.selection.select(row)); // ?
        }
      );
    }
  }
  // Si el número de elementos seleccionados coincide con el número total de filas.
  isAllSelected() {
    const numSeleccion = this.selection.selected.length;
    const numColumnas = this.dataSource.data.length; // longitud arreglo
    return numSeleccion === numColumnas;  // 4 = true
  }
  // si alguno esta seleccionado = true
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
      panelClass: 'custom-modal',
      height: '300px',
      width: '500px',
      disableClose: false,
      hasBackdrop: true,
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}



