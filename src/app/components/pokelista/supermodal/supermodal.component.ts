import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';
// import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-modal',
  templateUrl: './supermodal.component.html',
  // styleUrls: ['./modal.component.css']
})
export class SuperModalComponent implements OnInit {
  // selectedFilas: Array<{}> = [];
  // pokemon: Pokemon[]; //
  constructor(
    private pokeServicio: PokeService
  ) {}
  ngOnInit() {
    this.getFilas();
  }
  getFilas() {
    // this.pokemon = this.pokeServicio.getSeleccion();
  }
}
