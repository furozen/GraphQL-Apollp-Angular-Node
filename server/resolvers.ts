import {getRegionsData} from './models/region';
import {Resolvers} from './server-types';


export const resolvers:Resolvers = {
  Query:{
    getRegions:(character, args, ctx)=>{
      return getRegionsData()
    }
  }

};
