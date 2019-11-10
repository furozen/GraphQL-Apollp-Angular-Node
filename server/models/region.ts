
import {regions} from '../data/regions';
import {Region} from '../server-types';

export const getRegionsData = (): Region[] => {
  return regions;
};
