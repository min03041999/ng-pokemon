import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon-list';
import data from '../../assets/pokedex.json';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  constructor() { }
  // orginal
  // getPokemonList(): Pokemon[]{
  //   return data.data;
  // }
  //observable
  getPokemonList(): Observable<Pokemon[]> {
    const pokemons = of(data.data);
    return pokemons;
  }
}
