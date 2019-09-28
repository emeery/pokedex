import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pokemon } from '../models/pokemon.model';
import { mimeTipo } from './mime.validator';

@Component({
  selector: 'app-pokeadd',
  templateUrl: './pokeadd.component.html',
  styleUrls: ['./pokeadd.component.scss']
})

export class PokeAddComponent implements OnInit {
  pokemon: Pokemon;
  forma: FormGroup;
  tipo: string;
  tipos = [
    {value: 'volador', viewValue: 'Volador'},
    {value: 'veneno', viewValue: 'Veneno'},
    {value: 'tierra', viewValue: 'Tierra'},
    {value: 'roca', viewValue: 'Roca'},
    {value: 'psiquico', viewValue: 'Psiquico'},
    {value: 'fuego', viewValue: 'Fuego'},
    {value: 'agua', viewValue: 'Agua'},
    {value: 'planta', viewValue: 'Planta'}
  ];
  boton = 'ENVIAR';
  // private modo = 'crear';
  // private perfilId: string;
  // spinner = false;
  imagenPrev: string;
  constructor(

  ) { }
  ngOnInit() {
    this.initForma();
  }
  initForma() {
      this.forma = new FormGroup({
        nombre: new FormControl(null , {
          validators: [Validators.required, Validators.minLength(3)]}),
        tipo: new FormControl(null , {
          validators: [Validators.required]}),
        imagen: new FormControl(null, {
          validators: [Validators.required], asyncValidators: [mimeTipo] }),
        activo: new FormControl(null , {
          validators: [Validators.required]}),
      });
  }
  addPokemon() {
    console.log(this.forma.value);
  }
  onChange(deviceValue) {
    console.log(deviceValue.value);
  }
  imagenSeleccion(event: Event) {
    const img = (event.target as HTMLInputElement).files[0];
    this.forma.patchValue({imagen: img }); // apunta a un solo control
    this.forma.get('imagen').updateValueAndValidity();
    const lector = new FileReader();
    lector.onload = () => { this.imagenPrev = lector.result as string; };
    lector.readAsDataURL(img);
  }
}
