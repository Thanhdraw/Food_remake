import { Food } from './food';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const FOODES = [
  { id: 12, name: 'Dr. Nice',img:'https://i.pinimg.com/236x/93/85/b2/9385b2c0a87025633cbd51c3f8f1fe1a.jpg',des:'lorem' },
  { id: 13, name: 'Bombasto',img:'https://i.pinimg.com/236x/93/85/b2/9385b2c0a87025633cbd51c3f8f1fe1a.jpg',des:'lorem' },
  { id: 14, name: 'Celeritas',img:'https://i.pinimg.com/236x/93/85/b2/9385b2c0a87025633cbd51c3f8f1fe1a.jpg',des:'lorem' },
  { id: 15, name: 'Magneta',img:'https://i.pinimg.com/236x/93/85/b2/9385b2c0a87025633cbd51c3f8f1fe1a.jpg',des:'lorem' },
  { id: 16, name: 'RubberMan',img:'https://i.pinimg.com/236x/93/85/b2/9385b2c0a87025633cbd51c3f8f1fe1a.jpg',des:'lorem' },
  { id: 17, name: 'Dynama',img:'https://i.pinimg.com/236x/93/85/b2/9385b2c0a87025633cbd51c3f8f1fe1a.jpg',des:'lorem' },
  { id: 18, name: 'Dr. IQ',img:'https://i.pinimg.com/236x/93/85/b2/9385b2c0a87025633cbd51c3f8f1fe1a.jpg',des:'lorem' },
  { id: 19, name: 'Magma',img:'https://i.pinimg.com/236x/93/85/b2/9385b2c0a87025633cbd51c3f8f1fe1a.jpg',des:'lorem' },
  { id: 20, name: 'Tornado',img:'https://i.pinimg.com/236x/93/85/b2/9385b2c0a87025633cbd51c3f8f1fe1a.jpg',des:'lorem' }
    ];
    return {FOODES};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Food[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}