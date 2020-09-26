export class Producto{
    private nombreProducto: string;
    private precio: number;

    public constructor(nombre:string, precio:number){
        this.nombreProducto = nombre;
        this.precio = precio;
    }

    public getNombreProducto():string{ 
        return this.nombreProducto;
    }
    
    public getPrecio():number{
        return this.precio;
    }
}