interface Image {
    alt: string;
    src: string;
}

export interface Item {
    title: string;
    description: string;
    image: Image;
}

export interface Category {
    id: string;
    name: string;
    description: string;
    borderColor: string;
    items: Item[];
}

export interface IData {
    gifting: Category;
    travel: Category;
    adultsWelcome: Category;
    artHomeDecor: Category;
    space: Category;
    popCulture: Category;
    toddlers: Category;
    realWorldRolePlaying: Category;
}
