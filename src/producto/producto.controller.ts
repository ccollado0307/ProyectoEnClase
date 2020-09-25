import { Controller, Get, Param } from '@nestjs/common';
import { ProductoService } from './producto.service';
import {Producto} from './Producto'

@Controller('productos')
export class ProductoController {
    constructor(private productoService: ProductoService) { }
    @Get(':index')
    public getProductos(@Param('index') index): Producto { 
        return this.productoService.getProductos(parseInt(index));
    }
}
