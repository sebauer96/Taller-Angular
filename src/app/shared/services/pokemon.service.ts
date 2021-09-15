import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient:HttpClient) { }

  public getPokemones(){
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon");
  }

}
