import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { Heroe } from '../../shared/interfaces/heroe.interface';

@Component({
  selector: 'app-view-heroes',
  templateUrl: './view-heroes.component.html',
  styleUrls: ['./view-heroes.component.css']
})
export class ViewHeroesComponent implements OnInit {
  public totalVotes = 0;
  public heroes:Array<Heroe> = [
    {
      id:1,
      description: "Batman el mejor superheroe",
      img: "../../assets/img/batman.png",
      name: "Batman",
      votes:0,
      superpoder: 'Ser rico'
    },
    {
      id:2,
      description: "El hombre araña",
      img: "../../assets/img/spiderman.png",
      name: "Spiderman",
      votes:0,
      superpoder: 'Tirar telas de araña'
    },
    {
      id:3,
      description: "Hulk el hombre verde",
      img: "../../assets/img/hulk.png",
      name: "Hulk",
      votes:0,
      superpoder: 'Enojarse'
    }
  ]

  public reroll(){
    this.heroes = [

        {
          id:4,
          description: "Daredevil pelea bien",
          img: "../../assets/img/daredevil.png",
          name: "DareDevil",
          votes:0,
          superpoder: 'Pelear bien'
        },
        {
          id:5,
          description: "El hombre pez",
          img: "../../assets/img/aquaman.png",
          name: "Aquaman",
          votes:0,
          superpoder: 'Nadar'
        },
        {
          id:6,
          description: "Linterna Verde, el hombre del anillo",
          img: "../../assets/img/linterna-verde.png",
          name: "Linterna Verde",
          votes:0,
          superpoder: 'Hacer cosas con el anillo'
        }

    ]
  }

  public listPokemones:Array<any> = [];

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getPokemones().subscribe((p:any)=>{
      this.listPokemones = p.results
    },(error:any)=>{
      console.error("ERROR " + error.message)
    })

  }
  public newVote(vote:number){
    this.totalVotes += vote;
  }

}
