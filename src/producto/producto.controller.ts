import { Controller, Get, Param, Post} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './Producto'
import { Body } from '@nestjs/common';

@Controller('productos')
export class ProductoController { 
    constructor(private productoService: ProductoService) { }
    @Get(':index')
    public getProductos(@Param('index') index): Producto { 
        return this.productoService.getProductos(parseInt(index));
    }

    @Post()
    create(@Body() prod: any): string {
        return this.productoService.create(prod);
    }
}
