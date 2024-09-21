import { Injectable } from '@nestjs/common';
import { IPokemonByID } from './interfaces/pokemonById.interface';
import { IHundredPokemons } from './interfaces/hundredPokemons.interface';
import { IPokemonAndTypes } from './interfaces/pokemonAndTypes.interface';

@Injectable()
export class AppService {
  async getHundredPokemons(): Promise<Array<IHundredPokemons>> {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    const data = await res.json();
    
    return data.results;
  }

  async getPokemonById(id: number): Promise<IPokemonByID> {
    if(!id) return;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json();
    
    const required:IPokemonByID = {name: data.name, types: data.types}

    return required;
  }

  async getPokemonTypes(id: number): Promise<IPokemonAndTypes> {
    if(!id) return;

    const pokemon = await this.getPokemonById(id);

    const result = await Promise.all(pokemon.types.map(async(type) => {
        const res = await fetch(type.type.url)
        const data = await res.json();
        const languages = data.names.filter(({language}) => language.name === 'es' || language.name === 'ja');
        return {...type, names: languages}
    }))

    return {...pokemon, types: result};
  }
}
