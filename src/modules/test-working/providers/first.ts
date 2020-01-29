import { Injectable, ProviderScope, Inject } from "@graphql-modules/di";
import { SecondProvider } from "./second";

@Injectable({
  scope: ProviderScope.Session
})
export class FirstProvider {
  constructor(@Inject(SecondProvider) private second: SecondProvider) {}

  generateId() {
    return this.second.generateId();
  }
}
