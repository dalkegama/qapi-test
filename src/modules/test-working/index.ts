import { GraphQLModule } from "@graphql-modules/core";
import { loadFiles } from "@graphql-toolkit/file-loading";

import { FirstProvider } from "./providers/first";
import { SecondProvider } from "./providers/second";

export const testWorkingModule = new GraphQLModule({
  typeDefs: loadFiles(`${__dirname}/schema/`),
  resolvers: loadFiles(`${__dirname}/resolvers/`),
  providers: [FirstProvider, SecondProvider]
});
