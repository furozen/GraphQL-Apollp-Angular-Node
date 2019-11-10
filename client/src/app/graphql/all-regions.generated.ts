import * as Types from '../../base-types';

import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type AllRegionsQueryVariables = {};


export type AllRegionsQuery = { __typename?: 'Query', getRegions: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Region', name: string }>>> };


export const AllRegionsDocument = gql`
    query AllRegions {
  getRegions {
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllRegionsGQL extends Apollo.Query<AllRegionsQuery, AllRegionsQueryVariables> {
    document = AllRegionsDocument;
    
  }