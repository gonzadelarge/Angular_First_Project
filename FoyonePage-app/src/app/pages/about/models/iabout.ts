import { Iimg, Iinfo } from "src/app/models/foyonePage";

export interface Iabout {
    info: Iinfo;
    bio: Ibio;
}

export interface Ibio {
    img: Iimg;
    title: string;
    text: string;
}