import { Component } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent {
  response1;
  response2;
  result;

  makeRequests() {
    combineLatest(
      this.requestName(),
      this.requestHobbies()
    )
      .subscribe(values => {
        this.result = `${values[0]} hobbies are ${values[1]}`;
      });
  }


  requestName(): Observable<any> {
    return of('John')
      .pipe(
        delay(1000),
        tap((value) => this.response1 = value)
      );
  }

  requestHobbies(): Observable<any> {
    return of('sport, programming')
      .pipe(
        delay(2000),
        tap((value) => this.response2 = value)
      );
  }

}
