#An example/bootstrap for typescript project on Node and Angular based on Apollo, GraphQL


##install depedences:
    yarn
    cd client | yarn
    cd server | yarn
  
##generate stuff by qraphqls schema:  
  yarn codegen-server
  yarn codegen-client



it produces schemas-types and related-project-stuff for server and client

:TODO make one schema-types for both parts

## run
in client dir:

    ng serve

in server dir:

    yarn start


#the schema 
 server/schema.graphql

#client

 Angular8 based client.
 
 
 read: 
 https://www.apollographql.com/docs/angular/,
 https://www.apollographql.com/docs/angular/basics/services/#code-generation
 https://medium.com/the-guild/apollo-angular-code-generation-7903da1f8559
 
#server
  Apollo Graphql serve

read:
    https://www.formidable.com/blog/2019/strong-typing/
to add bd support:    
  https://www.prisma.io/tutorials/bootstrap-a-graphql-server-in-typescript-ct09
  
#to use for own
 download/fork the repo
 
 change the schema.graphql for your own schema
 rewrite resolvers and data fetching in server's dir
 rewrtie components in client
 
 read above articles for glues.
 
 do not forget add 'graphqlServer' to client/src/environments/environment.prod.ts for **PROD**
