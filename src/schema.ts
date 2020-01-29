import { GraphQLModule } from "@graphql-modules/core";

import { testWorkingModule } from "./modules/test-working";
import { testBrokenModule } from "./modules/test-broken";

const { schema } = new GraphQLModule({
  imports: [testWorkingModule, testBrokenModule]
});

export default schema;
