import { FoodService } from './../food.service';

import { Food } from './../food';
import { Component, Input } from '@angular/core';
import { FOODES } from '../mock-food';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent {
  @Input() food?: Food;
  constructor(
    private route: ActivatedRoute,
    private FoodService: FoodService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getFood();
  }
  
  getFood(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.FoodService.getFood(id)
    .subscribe(food => this.food = food);
}
  
}
