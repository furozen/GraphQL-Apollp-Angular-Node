export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DayHour: any,
};


export enum ECousinFlags {
  Cosher = 'cosher',
  Vegan = 'vegan',
  Halyal = 'halyal',
  Fish = 'fish',
  Seafood = 'seafood',
  Diet = 'diet'
}

export enum ECousinType {
  Europian = 'europian',
  Russian = 'russian',
  East = 'east',
  Local = 'local'
}

export enum EDishType {
  Pizza = 'pizza',
  Burger = 'burger',
  Snack = 'snack',
  Salad = 'salad',
  Main = 'main',
  Desert = 'desert',
  Soup = 'soup',
  Drink = 'drink'
}

export type Mutation = {
   __typename?: 'Mutation',
  addPlace?: Maybe<Place>,
};


export type MutationAddPlaceArgs = {
  place: PlaceInput
};

export type Place = {
   __typename?: 'Place',
  name: Scalars['String'],
  region?: Maybe<Region>,
};

export type PlaceInput = {
  name: Scalars['String'],
  region?: Maybe<RegionInput>,
};

export type Position = {
   __typename?: 'Position',
  id: Scalars['ID'],
  place: Place,
  dishName: Scalars['String'],
  timeAccessibleSlots: Array<Maybe<TimeSlot>>,
  cousinFlags?: Maybe<Array<Maybe<ECousinFlags>>>,
  dishType: EDishType,
  cousinType?: Maybe<ECousinType>,
  timeOfDelivery: Scalars['Int'],
};

export type Query = {
   __typename?: 'Query',
  getRegions?: Maybe<Array<Maybe<Region>>>,
};

export type Region = {
   __typename?: 'Region',
  name: Scalars['String'],
};

export type RegionInput = {
  name?: Maybe<Scalars['String']>,
};

export type TimeSlot = {
   __typename?: 'TimeSlot',
  from: Scalars['DayHour'],
  to: Scalars['DayHour'],
};


      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    