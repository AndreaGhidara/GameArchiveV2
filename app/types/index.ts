
export interface genres{
    name:string
}

export interface GameCard{
    background_image: string
    id:number,
    name:string,
    metacritic?:number,
    genres?:genres[],
}

export interface Device{
    id:number,
    name:string,
    image_background:string,
    games_count:string
}

export interface Categories{
    id:number,
    name:string,
    image_background:string,
    games_count:string
}

export interface developer{
    name:string
}

export interface genre{
    name:string
}

export interface platform{
    name:string
}

export interface tag{
    name:string
    language:string
}

export interface Games{
    id:number,
    name:string,
    background_image:string,
    metacritic?:number,
    developers?:developer[],
    description_raw?:string,
    genres?:genre[]
    released?:string,
    tags?:tag[],
    stores?:[{
        store?:{
            name:string
        }
    }]
    platforms?:[{
        platform?:{
            name:string
        }
    }],
    // System requirements for PC
}


// Carousel
export interface CarouselProps {
    width?: number;
    height?: number;
    items: React.ReactNode[];
}

export interface CardCarouselProps {
    children?: React.ReactNode;
    index: number;
    activeIndex: number;
}

export interface CarouselIndicatorProps {
    activeIndex: number;
    length: number;
    maxIndicatorVisible?: number;
    onSetActiveIndex: (index: number) => void;
}
