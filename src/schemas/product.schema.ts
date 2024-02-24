import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
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
}
export const productSchema = SchemaFactory.createForClass(Product);
