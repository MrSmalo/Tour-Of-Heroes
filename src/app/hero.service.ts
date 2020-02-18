import { HEROES } from './mock-heroes';
import { IHero } from './ihero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): IHero[] {
    return HEROES;
  }
}
