import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  @ViewChild('start') startInterval: ElementRef;

  result = '';
  subscription: Subscription;

  constructor() {
  }

  ngOnInit() {
  }

  subscribe() {
    const search$ = interval(1000);
    const click$ = fromEvent(this.startInterval.nativeElement, 'click');

    this.subscription = click$
      .pipe(
        switchMap((clickEvent) => {
          return search$;
        })
      )
      .subscribe((item) => {
        this.result += ' ' + item;
      });
  }

  unsubsribe() {
    this.subscription.unsubscribe();
  }

  clear() {
    this.result = '';
  }

}
