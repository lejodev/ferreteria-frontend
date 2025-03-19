import { IProduct } from "../../sales/interfaces/product.interface"

export interface IStock {
    id: number,
    amount: number,
    updatedAt: Date,
    products: IProduct

}