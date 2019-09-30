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
  pokemon: Pokemon;
  formaPoke: FormGroup;
  tipo: string;
  tipos = [
    {value: '../../../assets/images/png/drop.png', viewValue: 'Agua'},
    {value: '../../../assets/images/png/leaf.png', viewValue: 'Planta'},
    {value: '../../../assets/images/png/ground.png', viewValue: 'Tierra'},
    {value: '../../../assets/images/png/flame.png', viewValue: 'Fuego'},
    {value: '../../../assets/images/png/wind.png', viewValue: 'Volador'},
    {value: '../../../assets/images/png/stone.png', viewValue: 'Roca'},
    {value: '../../../assets/images/png/flash.png', viewValue: 'Electrico'},
    {value: '../../../assets/images/png/psychic.png', viewValue: 'Psiquico'},
  ];
  boton = 'ENVIAR';
  // private modo = 'crear';
  // private perfilId: string;
  // spinner = false;
  imagenPrev: string;
  constructor(
    private pokeServicio: PokeService
  ) { }
  ngOnInit() {
    this.initForma();
  }
  initForma() {
    this.formaPoke = new FormGroup({
      nombre: new FormControl(null , {
        validators: [Validators.required, Validators.minLength(3)]}),
      tipo: new FormControl(null , {
        validators: [Validators.required]}),
      imagen: new FormControl(null, {
        validators: [Validators.required], asyncValidators: [mimeTipo] }),
    });
  }
  addPokemon() {
    this.pokeServicio.addPokemon(this.formaPoke.value);
  }
  // selectionChange //
  imagenSeleccion(event: Event) {
    const img = (event.target as HTMLInputElement).files[0];
    this.formaPoke.patchValue({imagen: img }); // apunta a un solo control
    this.formaPoke.get('imagen').updateValueAndValidity();
    const lector = new FileReader();
    lector.onload = () => { this.imagenPrev = lector.result as string; };
    lector.readAsDataURL(img);
  }
}
