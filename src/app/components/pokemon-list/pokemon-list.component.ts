import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pokemon-list';
import { PokemonListService } from '../../service/pokemon-list.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  constructor(private pokemonListService: PokemonListService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList(){
    // orginal
    // this.pokemons = this.pokemonListService.getPokemonList();
    //observable
    this.pokemonListService.getPokemonList().subscribe(pokemons => this.pokemons = pokemons);
  }
}
