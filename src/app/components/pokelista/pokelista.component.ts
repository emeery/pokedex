import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Pokemoni } from '../models/pokemon.model';
import { PokeService } from './poke.service';
import { Subscription } from 'rxjs';
import { MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { SuperModalComponent } from './supermodal/supermodal.component';
@Component({
  selector: 'app-pokelista',
  templateUrl: './pokelista.component.html',
  styleUrls: ['./pokelista.component.scss']
})

export class PokelistaComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Pokemoni>(); // arreglo de tipo Tabla/Pokemon
  cols: string[] = ['id', 'pokemon', 'icono', 'detalles']; // columnas tabla lista
  pokemon: Pokemoni[] = [];
  superball = '../../../assets/images/png/superball.png';
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; // paginacion Angular Material
  // selection = new SelectionModel<Pokemon>(true, []);
  // selectedFilas: Array<Pokemon> = [];
  // pokemonPorPagina = 5;
  // pokemon: Pokemon[]; // arreglo de tipo Pokemon
  // subs: Subscription; // subscripción al observable Pokemon
  constructor(
    private pokeServicio: PokeService,
    public dlg: MatDialog
  ) {}
  ngOnInit() {
    this.getPo();
  }
  getPo() {
    this.pokeServicio.getP().subscribe( (res) => {
      this.pokemon = res.pokemon;
      console.log(this.pokemon);
      this.dataSource.data = this.pokemon;
     });
    // this.pokeServicio.getP().subscribe((poke: Pokemoni[]) => {
    //   this.pokemo = poke;
    // })
  }
  getPokeD(i: number) {
    const index = i + 1;
    this.pokeServicio.setPokeDetails(index);
    this.openPokemon();
    // this.pokemon = this.pokeServicio.getPokemon();
    // this.dataSource.data = this.pokemon;
    // this.subs = this.pokeServicio.pokemonObservable
    // .subscribe((poke: Pokemon[]) => {
    //   this.pokemon = poke;
    // });

  }
  makeFiltro(v: string) {
    // this.dataSource.filter = v.trim().toLocaleLowerCase();
  }
  // Selecciona todas las filas si no están todas seleccionadas
  // de lo contrario, selección clara
  masterToggle(ref) {
    // console.log(this.isSomeSelected());
    // if (this.isSomeSelected()) {
    //   this.selection.clear();
    //   // console.log(ref);
    // } else {
    //   console.log(ref);
    //   this.isAllSelected() ?
    //   this.selection.clear() : this.dataSource.data.forEach(
    //     row => {
    //       this.selection.select(row);
    //       console.log(this.selection.select(row)); // ?
    //     }
    //   );
    // }
  }
  // Si el número de elementos seleccionados coincide con el número total de filas.
  isAllSelected() {
    // const numSeleccion = this.selection.selected.length;
    // const numColumnas = this.dataSource.data.length; // longitud arreglo
    // return numSeleccion === numColumnas;  // 4 = true
  }
  // si alguno esta seleccionado = true
  isSomeSelected() {
    // return this.selection.selected.length > 0;
  }
  store() {
    // setTimeout(() => {
    //   this.selectedFilas = this.selection.selected;
    //   this.pokeServicio.addSeleccion(this.selectedFilas);
    // });
  }
  openPokemon() {
    this.dlg.open(SuperModalComponent, {
      panelClass: 'custom-supermodalito',
      height: '300px',
      width: '500px',
      disableClose: false,
      hasBackdrop: true,
    });
  }
  ngOnDestroy() {
    // this.subs.unsubscribe();
  }
}



