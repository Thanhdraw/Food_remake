import { Food } from './food';
import { Injectable } from '@angular/core';
import { FOODES } from './mock-food';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private foodesUrl = 'api/foodes'; // URL to web api
  getfoodes(): Observable<Food[]> {
    const foodes = of(FOODES);
    this.messageService.add('FoodService: fetched Food');
    return foodes;
  }
  getFood(id: number): Observable<Food> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const food = FOODES.find((h) => h.id === id)!;
    return of(food);
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  private log(message: string) {
    this.messageService.add(`FoodService: ${message}`);
  }
}
