# Typescript Result Primitives

A library that adds function result primitives to support better control flows
in expected failure scenarios.

## Installing

```sh
npm i @laurence79/ts-results
```

## Using

```ts
import { Result, success, fail } from '@laurence79/ts-results';

export const find = (id: string): Result<Data, 'NOT_FOUND'> => {
  // the data is found
  return success(theData);

  // it is not
  return fail('NOT_FOUND');
};
```

## Contributing

Contributions welcome!
