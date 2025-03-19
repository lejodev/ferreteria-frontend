import { IProduct } from "../../sales/interfaces/product.interface";

export interface IplainStock {
    productId: number,
    buyPrice: number,
    description: string,
    name: string,
    sellPrice: number
    id: number;
    amount: number;
    updatedAt: Date;
}