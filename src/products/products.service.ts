import { Injectable } from '@nestjs/common';
import { product } from './products.model';

@Injectable()
export class ProductsService {
    products: product[] = [];

    createProduct( name: string, description: string, price: number) {
        const id = this.products.length + 1; // Generate a simple ID based on the array length
        const newProduct = new product(id, name, description, price);
        this.products.push(newProduct);
        return newProduct;
    }
    getProducts() {
        return this.products    ;
    }
    getProductById(productId: string) {
        const id = parseInt(productId, 10);
        return this.products.find(product => product.id === id);
    }
}
