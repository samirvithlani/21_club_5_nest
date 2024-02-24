import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { Category } from './category.schema';
import * as mongoose from 'mongoose';

@Schema()
export class Product {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
  @Prop({ default: Date.now })
  createdAt: Date;
  @Prop({ default: Date.now })
  updatedAt: Date;
  @Prop({type:mongoose.Schema.Types.ObjectId, ref: 'Category'})
  category: Category;
}
export const productSchema = SchemaFactory.createForClass(Product);
