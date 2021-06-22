import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion | undefined;
  productoID: string | undefined;

  constructor( private route: ActivatedRoute,  public productoService: ProductosService) { }

  ngOnInit(): void {

    this.route.params.subscribe( parametros => {
      console.log(parametros.id);
      this.productoService.getProducto(parametros.id)
      .subscribe( (producto: any) => {
        this.producto = producto;
        this.productoID = parametros.id;
      } );
    } );

  }

}