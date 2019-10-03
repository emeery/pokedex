import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PokeService } from '../pokelista/poke.service';
import {TIPOS, POKEMON} from '../pokelista/pokejson';

@Component({
  selector: 'app-pokeadd',
  templateUrl: './pokeadd.component.html',
  styleUrls: ['./pokeadd.component.scss']
})

export class PokeAddComponent implements OnInit {
  formaPoke: FormGroup; // formulario
  tipos = TIPOS;  // pokejson
  pokemon = POKEMON; // pokejson
  boton = 'ENVIAR';
  constructor(
    private pokeServicio: PokeService
  ) { }
  ngOnInit() {
    this.initForma();
  }
  initForma() { // inicializa formulario
    this.formaPoke = new FormGroup({
      pokemon: new FormControl(null , {
        validators: [Validators.required]}),
      tipo: new FormControl(null , {
        validators: [Validators.required]}),
    });
  }
  addPokemon() { // agrega pokemon al arreglo
    this.pokeServicio.addPokemon(this.formaPoke.value);
  }

}
