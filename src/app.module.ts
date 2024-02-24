import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/nest-club-215'),
    ProductsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}