export interface IPokemonByID {
    name:  string;
    types: TypeElement[];
}

export interface TypeElement {
    slot: number;
    type: TypeType;
}

export interface TypeType {
    name: string;
    url:  string;
}
