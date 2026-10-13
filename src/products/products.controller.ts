import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getProducts() {
        // Implementation for getting products
        return this.productsService.getProducts();
    }

@Get(':productId')
getProduct(@Param('productId') productId: string) {
   return `This action returns a #${productId} product`;
}
    @Post()
    createProduct(@Body('name') name: string, @Body('description') description: string, @Body('price') price: number) {
        // Implementation for creating a product
        const newProduct = this.productsService.createProduct(name, description, price);
        return newProduct;
    }
}
