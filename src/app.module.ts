import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config/dist';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1/nest-club-215'),
    ProductsModule,
    CategoryModule,
    AuthModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
