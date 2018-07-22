import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  questionForm = new FormGroup({
    'answer': new FormControl()
  });

  constructor() {
  }

  ngOnInit() {
    this.questionForm.get('answer').valueChanges
      .pipe(
        filter((value: string) => {
          return value.toLowerCase() === 'kyiv';
        })
      )
      .subscribe((value) => {
        setTimeout(() => {
          alert('Correct!');
        });
      });
  }

}
