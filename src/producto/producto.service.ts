import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Producto } from './Producto';

@Injectable()
export class ProductoService {
    private listaProductos = [];
    private static readonly CANTIDAD_PRODUCTOS = 10; 
    
    public getProducto(): any {
        let productos = []; 
        for (let i = 0; i < ProductoService.CANTIDAD_PRODUCTOS; i++) {
            let producto = {
                'producto': 'producto_' + i,
                'precio': Math.floor(Math.random() * 100),
                'descripcion': 'descripcion_' + i
            };
            productos.push(producto);
        }
    return productos;
    }

    private loadProductos(): void { 
        let archivo = fs.readFileSync('productos.csv', 'utf8');
        let lineas = archivo.split('\n');
        const elementos = [];
        for (let i = 0; i < lineas.length; i++) {
            let linea = lineas[i].replace('\r', '');
            let p = linea.split(',');
            elementos.push(p);
        }
        this.listaProductos = [];
        for (let i = 0; i < elementos.length; i++) {
            let producto = new Producto(elementos[i][0],parseInt(elementos[i][1]));
            this.listaProductos.push(producto);
        }
    }

    public getProductos(index: number): Producto { 
        this.loadProductos();
        if (index < 0 || index >= this.listaProductos.length)
            return null;
            
        return this.listaProductos[index];
    }

    public create(prod: any): string {
        console.log(prod);
        const producto = new Producto(prod.nombreProducto, prod.precio);

        if (producto.getNombreProducto() && producto.getPrecio()) {
            fs.appendFileSync('productos.csv',
            "\n" +
            producto.getNombreProducto() + ","
            + producto.getPrecio());

            return "Ok";
        } else {
            return "No es un producto!";
        }

        return null;
    }
}