import { ApolloServer } from "apollo-server";
import 'graphql-import-node';

import * as schema from './schema.graphql'
import {resolvers} from './resolvers';

export interface Context {
  models: {

  };
}

const context: Context = {
  models: {

  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers as any,
  context
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
