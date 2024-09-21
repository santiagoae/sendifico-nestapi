export interface IPokemonAndTypes {
    name:  string;
    types: TypeElement[];
}

export interface TypeElement {
    slot:  number;
    type:  LanguageClass;
    names: Name[];
}

export interface Name {
    language: LanguageClass;
    name:     string;
}

export interface LanguageClass {
    name: string;
    url:  string;
}
