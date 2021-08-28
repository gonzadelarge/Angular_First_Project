export interface Imenu {
    title: string;
    links: IlinksMenu[];   
}

export interface Ifooter {
    copyright: string;
    rrss: Irrss[];
}

export interface IlinksMenu {
    name: string;
    navigate: string;
}

export interface Irrss {
    name: string;
    icon: string;
    url: string;
}

export interface Iimg {
    link: string;
    src: string;
    alt: string;
}

export interface Iinfo {
    title: string;
    img: Iimg;
}

export interface Imid {
    gallery: Iimg[];
}