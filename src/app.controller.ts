import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { IPokemonByID } from './interfaces/pokemonById.interface';
import { IHundredPokemons } from './interfaces/hundredPokemons.interface';
import { IPokemonAndTypes } from './interfaces/pokemonAndTypes.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/pokemon')
  getHundredPokemons(): Promise<Array<IHundredPokemons>> {
    return this.appService.getHundredPokemons();
  }

  @Get('/api/pokemon/:id')
  getPokemonById(@Param('id') id:number): Promise<IPokemonByID> {
    return this.appService.getPokemonById(id);
  }

  @Get('/api/pokemonAndTypes/:id')
  getPokemonTypes(@Param('id') id:number): Promise<IPokemonAndTypes> {
    return this.appService.getPokemonTypes(id);
  }
}
