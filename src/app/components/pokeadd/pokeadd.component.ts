import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pokemon } from '../models/pokemon.model';
import { mimeTipo } from './mime.validator';
import { PokeService } from '../pokelista/poke.service';
@Component({
  selector: 'app-pokeadd',
  templateUrl: './pokeadd.component.html',
  styleUrls: ['./pokeadd.component.scss']
})

export class PokeAddComponent implements OnInit {
  formaPoke: FormGroup;
  tipos; pokemon; // arreglo
  boton = 'ENVIAR';
  spinner = false;
  constructor(
    private pokeServicio: PokeService
  ) { }
  ngOnInit() {
    this.initForma();
    this.tipos = this.pokeServicio.getTiposArray();
    this.pokemon = this.pokeServicio.getPokeArray();
  }
  initForma() {
    this.formaPoke = new FormGroup({
      pokemon: new FormControl(null , {
        validators: [Validators.required]}),
      tipo: new FormControl(null , {
        validators: [Validators.required]}),
    });
  }
  addPokemon() {
    this.pokeServicio.addPokemon(this.formaPoke.value);
  }

}
