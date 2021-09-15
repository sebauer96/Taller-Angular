import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit, OnDestroy, OnChanges {

  _heroe:Heroe = {
    id:0,
    description: '',
    img: '',
    name: '',
    superpoder: '',
    votes: 0
  };

  get heroe():Heroe {
    return this._heroe
  }
  @Input() set heroe(heroe:Heroe){
    console.log(heroe)
    heroe.name = heroe.name.toLocaleUpperCase();
    this._heroe = heroe;
  }


  @Output() newVote = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(changes:SimpleChanges):void {
    console.log("Cambios de ng on changes")
    console.log(changes)
  }

  addVote(heroe:Heroe) {
    heroe.votes = heroe.votes + 1;
    this.newVote.emit(1);
  }

  changeName(input: any) {
    let value: string = input.target.value;
    this.heroe.name = value;
  }

}
