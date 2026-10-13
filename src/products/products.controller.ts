import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getProducts() {
        // Implementation for getting products
        return 'List of products';
    }

    @Post()
    createProduct(@Body('name') name: string, @Body('description') description: string, @Body('price') price: number) {
        // Implementation for creating a product
        const newProduct = this.productsService.createProduct(name, description, price);
        return newProduct;
    }
}
