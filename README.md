# Injection Problem

Steps to reproduce
1. Run `npm install`
2. Run `npm start`
3. Navigate to http://localhost:8080
4. Execute the following query
```
query test {
  testWorking {
    id
  }
  testBroken {
    id
  }
}
```

You will see in the response that `testWorking` resolves correctly while `testBroken` throws an error and resolves to null.

