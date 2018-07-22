import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {
  numberOfChanges = 0;
  form = new FormGroup({
    'first': new FormControl(),
    'second': new FormControl(),
    'third': new FormControl()
  });

  constructor() {
  }

  ngOnInit() {
    merge(
      this.form.get('first').valueChanges,
      this.form.get('second').valueChanges,
      this.form.get('third').valueChanges
    )
      .subscribe((value) => {
        this.numberOfChanges++;
      });
  }

}
