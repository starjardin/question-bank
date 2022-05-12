import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/userResolver";
import Seed from "./migration/dev";

(async function main() {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "tantely",
    password: "admin123",
    database: "elite",
    entities: ["src/**/*.*"],
    synchronize: true,
    //  autoLoadEntities: true,
  });
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });
  const server = new ApolloServer({ schema, introspection: true });
  const port = process.env.PORT || 4000;

  
  await server.listen(4000);
  await Seed();

  console.log(`server has started on port ${port}`);
})();
