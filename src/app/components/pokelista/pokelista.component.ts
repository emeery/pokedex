import { Component, OnInit } from '@angular/core';
import { PokeService } from './poke.service';

@Component({
  selector: 'app-pokelista',
  templateUrl: './pokelista.component.html',
  styleUrls: ['./pokelista.component.scss']
})
export class PokelistaComponent implements OnInit {

  constructor(
    private pokeServicio: PokeService
  ) { }

  ngOnInit() {
    this.getPokemones();
  }
  getPokemones() {
    this.pokeServicio.getPokemones()
    .subscribe(e => {
      console.log(e);
    })
  }
}
