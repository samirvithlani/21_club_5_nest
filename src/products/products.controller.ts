import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ObjectId } from 'mongoose';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async create(@Body() createProductDto: CreateProductDto, @Res() res) {
    try {
      const savedProduct = await this.productsService.create(createProductDto);
      return res.status(201).json({
        message: 'Product created successfully',
        data: savedProduct,
      });
    } catch (error) {
      // Handle any errors that occur during product creation
      return res.status(500).json({
        message: 'Failed to create product',
        error: error.message, // This assumes your service methods throw errors with a 'message' property
      });
    }
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    console.log("id in controller", id);
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.productsService.remove(id);
  }
}
