import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokeService } from './poke.service';
import { MatPaginator, MatTableDataSource, MatDialog, PageEvent} from '@angular/material';
import { SuperModalComponent } from './supermodal/supermodal.component';
@Component({
  selector: 'app-pokelista',
  templateUrl: './pokelista.component.html',
  styleUrls: ['./pokelista.component.scss']
})

export class PokelistaComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Pokemon>();
  cols: string[] = ['id', 'pokemon', 'icono', 'detalles'];
  pokemon: Pokemon[] = [];
  superball = '../../../assets/images/png/superball.png';
  indicePagina = [3, 5, 10];
  totalPoke: number;
  pokePorPagina = 5;
  paginaActual = 1;
  index: number;
  @ViewChild(MatPaginator, {static: true}) paginacion: MatPaginator;
  constructor(
    private pokeServicio: PokeService,
    public dlg: MatDialog
  ) {}
  ngOnInit() {
    this.setPag();
    this.getPo();
  }
  setPag() {
    this.dataSource.paginator = this.paginacion;
    this.dataSource.paginator._intl.itemsPerPageLabel = 'Pokémon por Pagina';
  }
  getPo() {
    this.pokeServicio.getP().subscribe( (res) => {
      this.pokemon = res.pokemon;
      this.totalPoke = this.pokemon.length;
      this.dataSource.data = this.pokemon;
      this.dataSource.paginator = this.paginacion;
      // setTimeout(() => {  });
    });
  }
  getPokeD(i: number) {
    this.index = i;
    this.pokeServicio.getPokeDetails(this.index);
    this.openPokemon();
  }
  makeFiltro(s: string) {
    s = s.trim().toLowerCase();
    this.dataSource.filter = s;
  }
  // onChangePagina(pagD: PageEvent) {
  //   console.log(pagD);
  //   // this.pokeServicio.getPokeDetails(this.pokePorPagina);
  // }

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
      height: '400px',
      width: '500px',
      disableClose: false,
      hasBackdrop: true,
    });
  }
  ngOnDestroy() {
    // this.subs.unsubscribe();
  }
}



