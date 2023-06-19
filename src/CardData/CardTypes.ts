export interface CardData {
    id: string;
    imageSrc: string;
}

export interface TimeLayer {
    cards: CardData[];
}

export interface Composition {
    timeLayers: TimeLayer[];
}