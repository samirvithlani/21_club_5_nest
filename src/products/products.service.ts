import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Product } from 'src/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
;

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      console.log("createProductDto in service", createProductDto);
      const savedProduct = await this.productModel.create(createProductDto);
      console.log("savedProduct in service", savedProduct);
      return savedProduct;
    } catch (err) {
      console.log("error in service", err);
      throw new InternalServerErrorException('Failed to create product');
    }
  }



  findAll() {
      return this.productModel.find()
  }

  findOne(id: ObjectId): Promise<Product> {
    console.log("id in service", id);
    //return `This action returns a #${id} product`;
    return this.productModel.findById(id).exec()
  }

  update(id: ObjectId, updateProductDto: UpdateProductDto) {
    //return `This action updates a #${id} product`;
    return this.productModel.findByIdAndUpdate(id, updateProductDto, {new: true})
  }

  remove(id: ObjectId): Promise<any> {
    
    return this.productModel.deleteOne({_id: id}).exec()
  }
}
