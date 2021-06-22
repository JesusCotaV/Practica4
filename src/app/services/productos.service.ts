import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  Productos: Producto[] = [];
  productosFiltrado: Producto[] = [];
  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }

  // tslint:disable-next-line: typedef
  private cargarProductos(){
    this.http.get('https://angularhtml-bfffc-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( ( resp: any ) => {
      this.Productos = resp;
      this.cargando = false;
    });
  }

  // tslint:disable-next-line: typedef
  getProducto( id: string ){
    return this.http.get(`https://angularhtml-bfffc-default-rtdb.firebaseio.com/productos/${ id }.json`);

  }

  // tslint:disable-next-line: typedef
  buscarProducto( termino: string ){
    // tslint:disable-next-line: no-shadowed-variable
    this.productosFiltrado = this.Productos.filter( Producto => {
      return true;
    });
    console.log(this.productosFiltrado);
  }



}
