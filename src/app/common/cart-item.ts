import { Cattle } from './cattle';

export class CartItem {
    id: bigint;
    name: string;
    imageUrl: string;
    unitPrice: number;
    quantity: number;

    constructor (private cattle: Cattle) {
        this.id = cattle.id;
        this.name = cattle.category.breed;
        this.imageUrl = cattle.imageUrl;
        this.unitPrice = cattle.price;
        this.quantity = 1;
    }
}