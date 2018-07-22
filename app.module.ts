import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { MergeComponent } from './merge/merge.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeSwitchComponent } from './merge-switch/merge-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FilterComponent,
    MergeComponent,
    DebounceTimeComponent,
    CombineLatestComponent,
    MergeMapComponent,
    SwitchMapComponent,
    MergeSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'map', component: MapComponent},
      {path: 'filter', component: FilterComponent},
      {path: 'merge', component: MergeComponent},
      {path: 'debounce-time', component: DebounceTimeComponent},
      {path: 'combine-latest', component: CombineLatestComponent},
      {path: 'merge-switch-map', component: MergeSwitchComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
