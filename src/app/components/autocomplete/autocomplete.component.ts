import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  keyword = 'url';
  data = [];
  selected: any;
  notFound = 'No disponible'

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  selectEvent(item: any) { 
    console.log(item);
    this.selected = item;
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
  }
  
  onFocused(e: any){
  }

  getPokemon() {
    this.pokemonService.getPokemon().subscribe({
      next: res => {
        console.log(res.results);
        this.data = res.results;
      },
      error: err => console.log(err)
    })
  }
}
