import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {
  requestValue = '';
  searchForm = new FormGroup({
    'search': new FormControl()
  });
  constructor() { }

  ngOnInit() {
    this.searchForm.get('search').valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe((value) => {
        this.requestValue = value;
      });
  }

}
