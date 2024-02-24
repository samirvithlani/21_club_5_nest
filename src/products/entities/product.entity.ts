import { Category } from "src/schemas/category.schema";

export class Product {
    name: string;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    category: Category;
}
