import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Category{

    @Prop()
    name: string;
}
export const categorySchema = SchemaFactory.createForClass(Category);