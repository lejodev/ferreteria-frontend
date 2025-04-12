import { IStock } from "./stock.interface";

export interface ISockNotification extends IStock {
    message: string;
}