import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private icon: MatIconRegistry,
    private dom: DomSanitizer
  ) { this.loadIcono(); }

  ngOnInit() {
  }
  loadIcono() {
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
      'icono-login',
      this.dom.bypassSecurityTrustResourceUrl(
        '../../../assets/key.svg'
      )
    );
    this.icon.addSvgIcon(
      'icono-logout',
      this.dom.bypassSecurityTrustResourceUrl(
        '../../../assets/logout.svg'
      )
    );
  }
}
