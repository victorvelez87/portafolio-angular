import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  producto: ProductoDescripcion = {};
  id: string | undefined;

  constructor( private route: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params
    .subscribe( parametros => {
      console.log(parametros['id']);

      this.productosService.getProducto(parametros['id'])
      .subscribe( (producto: ProductoDescripcion) => {

          this.id = parametros['id'];
          this.producto = producto;
      });
    });
  }

}
