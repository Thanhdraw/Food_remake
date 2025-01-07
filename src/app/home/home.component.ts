import { FoodService } from './../food.service';
import { Observable, of } from 'rxjs';
import { FOODES } from '../mock-food';
import { Food } from './../food';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Đây là trang Menu';
  foodes: Food[] = [];
  selectedFood?: Food;
  onSelect(foodes: Food): void {
    this.selectedFood = foodes;
    this.messageService.add(`HeroesComponent: Selected hero id=${foodes.id}`);
  }
  constructor(
    private FoodService: FoodService,
    private messageService: MessageService
  ) {}
  // getfoodes(): void {
  //   this.foodes = this.FoodService.getHeroes();
  // }
  ngOnInit(): void {
    this.getfoodes();
  }
  // getfoodes(): Observable<Food[]> {
  //   const foodes = of(this.foodes);
  //   return foodes;
  // }

  getfoodes(): void {
    this.FoodService.getfoodes().subscribe((foodes) => (this.foodes = foodes));
  }
}
