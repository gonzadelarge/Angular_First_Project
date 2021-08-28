import { Iimg, Imid } from "src/app/models/foyonePage";

export interface Ihome {
    init: Init;
    mid: Imid;
    end: Iend;
}

export interface Init {
    title: string;
    description: string;
    img: Iimg;
}

export interface Iend {
    title: string;
    gallery: Iimg[];
}