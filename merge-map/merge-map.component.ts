import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { fromEvent, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {
  @ViewChild('start') startInterval: ElementRef;

  result = '';
  subscriptions: Subscription[] = [];

  constructor() {
  }

  ngOnInit() {

  }

  subscribe() {
    const click$ = fromEvent(this.startInterval.nativeElement, 'click');
    const search$ = interval(1000);

    const subscription = click$
      .pipe(
        mergeMap((clickEvent) => {
          return search$;
        })
      )
      .subscribe((item) => {
        this.result += ' ' + item;
      });
    this.subscriptions.push(subscription);
  }

  unsubsribe() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  clear() {
    this.result = '';
  }

}
