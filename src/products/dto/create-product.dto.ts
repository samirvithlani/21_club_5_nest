import { Category } from "src/schemas/category.schema";

export class CreateProductDto {

    name: string;
    description: string;
    price: number;
    category: Category;
}
