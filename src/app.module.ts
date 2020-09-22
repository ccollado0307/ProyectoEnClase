import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule} from '@nestjs/serve-static';
import { join } from 'path';
import { CalcularController } from './calcular/calcular.controller';
import { CalcularService } from './calcular/calcular.service';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..',
      'client'),
  }),],
  controllers: [AppController, CalcularController],
  providers: [AppService, CalcularService],
})
export class AppModule { }