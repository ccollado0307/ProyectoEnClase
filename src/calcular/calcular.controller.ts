import { CalcularService } from './calcular.service';
import { Controller, Get, Param } from '@nestjs/common';

//Esto es lo que se configura primero
@Controller('calcular')
export class CalcularController {
    constructor (private calcularService: CalcularService){}
    
    @Get(':oper/:var1/:var2')
    ejecutar(@Param('oper') oper, @Param('var1') var1, @Param('var2') var2): string {
        let numero1 = parseInt(var1);
        let numero2 = parseInt(var2); 
        return this.calcularService.getResultado(oper, numero1, numero2);
    }
}