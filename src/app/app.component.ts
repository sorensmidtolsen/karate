import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'karate';

  constructor (private httpService: HttpClient) { }
  arrExercises: string [];
  arrMyExercises: string [];

  ngOnInit () {    
    this.arrMyExercises = [];    
    this.httpService.get('./assets/exercises.json').subscribe(
      data => {
        this.arrExercises = data as string [];
        //console.log(this.arrExercises[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  onAdd(exercise: string): void {    
    this.arrMyExercises.push(exercise);
    this.arrExercises = this.arrExercises.filter(item => item !== exercise);
  }
}
