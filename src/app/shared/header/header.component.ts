import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfopaginaService } from '../../services/infopagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public infopaginaService: InfopaginaService, private router: Router ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  buscarProducto( termino: string ){
    if (termino.length < 1){
      return;
    }
    this.router.navigate(['/search', termino]);
    console.log(termino);
  }

}
