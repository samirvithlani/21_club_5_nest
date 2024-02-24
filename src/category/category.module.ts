import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { categorySchema } from 'src/schemas/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: categorySchema }]), // Assuming the model name is 'Category'
  ],

  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule { }
