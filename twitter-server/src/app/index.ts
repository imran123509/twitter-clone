import  express  from "express";
import bodyParser  from "body-parser";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { Query } from "mongoose";
import { prismaclient } from "../clients/db";


export async function initServer() {
     const app=express()
     app.use(bodyParser.json())

     prismaclient.user.create({
          data:{
             
          }
     })
     const grahpQlServer = new ApolloServer ({
        typeDefs: `
           type Query{
              sayHello: String
           }
        `,
        resolvers: {
            Query: {
                sayHello: ()=> `hello`
            },
        },
      });

      await grahpQlServer.start();

     app.use('/garphql', expressMiddleware(grahpQlServer));

     return app;
}