export class Producto{
    private nombreProducto: string;
    private precio: number;

    public constructor(nombre:string, precio:number){
        this.nombreProducto = nombre;
        this.precio = precio;
    }

    public GetProducto():string{ 
        return this.nombreProducto;
    }
    
    public GetPrecio():number{
        return this.precio;
    }
}