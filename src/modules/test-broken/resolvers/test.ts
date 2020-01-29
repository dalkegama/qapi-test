import { Resolvers } from "../resolvers.generated";
import { FirstProvider } from "../providers/first";

const testResolver: Resolvers = {
  Query: {
    testBroken: (_, __, { injector }) => ({
      id: injector.get(FirstProvider).generateId()
    })
  }
};

export default testResolver;
