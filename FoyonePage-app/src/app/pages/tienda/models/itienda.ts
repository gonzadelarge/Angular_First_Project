import { Iimg, Iinfo } from "src/app/models/foyonePage";

export interface Itienda {
    info: Iinfo;
    coleccion: Icoleccion[];
}

export interface Icoleccion {
    title: string;
    price: string;
    img: Iimg;
    categoria: string;
    id: number;
}