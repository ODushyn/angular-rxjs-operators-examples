import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  userName: string;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  getUserName() {
    this.httpClient.get('assets/user.json')
      .pipe(
        map((response: any) => response.name),
      )
      .subscribe((name: string) => {
        this.userName = name;
      });
  }

}
