import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { IHero } from './../ihero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: IHero[];
  selectedHero: IHero;

  constructor(private heroService: HeroService) { }

  ngOnInit() { }

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }
}
