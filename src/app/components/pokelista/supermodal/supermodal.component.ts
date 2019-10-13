import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';
import { Pokemon } from '../../models/pokemon.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './supermodal.component.html',
  // styleUrls: ['./modal.component.css']
})
export class SuperModalComponent implements OnInit {
  pokemon: Pokemon[];
  nombre: string;
  avatar: string;
  index: number;
  descripcion: [];
  constructor(
    private pokeServicio: PokeService
  ) {}
  ngOnInit() {
    this.getI();
    this.getDetails();
    this.getDes();
  }
  getI() {
    this.index = this.pokeServicio.getIndex();
  }
  getDes() {
    this.pokeServicio.getDescription(this.index)
    .subscribe(poke => {
      this.descripcion = poke[`flavor_text_entries`][3][`flavor_text`];
    });
  }
  getDetails() {
    this.pokeServicio.getPokeDetails(this.index)
    .pipe(map(res => res ))
    .subscribe(poke => {
      this.nombre = poke[`name`];
      this.avatar = poke[`sprites`].front_default;
    });
  }
}
