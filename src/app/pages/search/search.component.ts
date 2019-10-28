import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private ruta: ActivatedRoute,
              public productoService: ProductoService) { }

  ngOnInit() {
    this.ruta.params
      .subscribe( params => {
        console.log(params['termino']);
        this.productoService.buscarProducto(params['termino'])
      } )
  }

}
