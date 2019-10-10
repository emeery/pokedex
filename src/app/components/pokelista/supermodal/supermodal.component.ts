import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';
import { Pokemoni } from '../../models/pokemon.model';
// import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-modal',
  templateUrl: './supermodal.component.html',
  // styleUrls: ['./modal.component.css']
})
export class SuperModalComponent implements OnInit {
  // selectedFilas: Array<{}> = [];
  pokemon;
  index: number;
  constructor(
    private pokeServicio: PokeService
  ) {}
  ngOnInit() {
    this.getI();
    this.getDetails();
  }
  getI() {
    this.index = this.pokeServicio.getIndex();
  }
  getDetails() {
    this.pokemon = this.pokeServicio.setPokeDetails(this.index)
    .subscribe(poke => {
      this.pokemon = poke;
      console.log(this.pokemon);
    });
  }
}
