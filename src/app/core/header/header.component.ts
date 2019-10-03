import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pokeball: string;
  pokebag: string;
  constructor(
    private icon: MatIconRegistry,
    private dom: DomSanitizer,
    public router: Router,
  ) {}

  ngOnInit() {
    this.loadIconos();
    this.loadPng();
  }
  loadPng() {
    this.pokeball = '../../../assets/images/png/pokeball.png';
    this.pokebag = '../../../assets/images/png/pokebag.png';
  }
  loadIconos() {
    this.icon.addSvgIcon(
      'icono-pokeball',
      this.dom.bypassSecurityTrustResourceUrl(
        '../../../assets/pokeball.svg'
      )
    );
    this.icon.addSvgIcon(
      'icono-plus',
      this.dom.bypassSecurityTrustResourceUrl(
        '../../../assets/plus.svg'
      )
    );
    this.icon.addSvgIcon(
      'icono-pokedex',
      this.dom.bypassSecurityTrustResourceUrl(
        '../../../assets/images/svg/pokedex.svg')
    );
    // this.icon.addSvgIcon(
    //   'icono-login',
    //   this.dom.bypassSecurityTrustResourceUrl(
    //     '../../../assets/key.svg'
    //   )
    // );
    this.icon.addSvgIcon(
      'icono-logout',
      this.dom.bypassSecurityTrustResourceUrl(
        '../../../assets/logout.svg'
      )
    );
  }
}
