import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {AllRegionsGQL} from '../../graphql/all-regions.generated';
import {map} from 'rxjs/operators';
import {Region} from '../../../base-types';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  regions:Observable<Region[]>

  constructor(
    private allRegionsGQ:AllRegionsGQL
  ) { }

  ngOnInit() {
    this.regions = this.allRegionsGQ.watch().valueChanges.pipe(
      map(result => result.data.getRegions)
    )
  }

}
