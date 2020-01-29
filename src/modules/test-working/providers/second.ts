import { Injectable, ProviderScope } from "@graphql-modules/di";

@Injectable({
  scope: ProviderScope.Session
})
export class SecondProvider {
  generateId() {
    return "thisisid";
  }
}
