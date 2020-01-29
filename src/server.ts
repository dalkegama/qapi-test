import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";

import schema from "./schema";

const app = express();

app.get("/healthz", (req, res) => {
  res.redirect("/.well-known/apollo/server-health");
});

const server = new ApolloServer({
  schema,
});

server.applyMiddleware({ app, path: "/" });

const port = 8080;
app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
