import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-heroes',
  templateUrl: './create-heroes.component.html',
  styleUrls: ['./create-heroes.component.css']
})
export class CreateHeroesComponent implements OnInit {
  public id:string = "";
  constructor(private _activatedRoute:ActivatedRoute) {
    this.id = this._activatedRoute.snapshot.paramMap.get('id') || '';
   }

  ngOnInit(): void {
  }

}
