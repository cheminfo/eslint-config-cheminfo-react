# eslint-config-cheminfo-react

Shared ESLint config for projects using React.

> [!IMPORTANT]  
> Configs now require using the ESLint Flat Config format.
> See the [migration guide](https://github.com/cheminfo/eslint-config/blob/main/MIGRATION.md) for more information.

## Installation

```console
npm i -D eslint-config-cheminfo-react eslint
```

## Usage

### In JavaScript projects

Create a `eslint.config.mjs` file with the following contents:

```js
import { defineConfig } from 'eslint/config';
import react from 'eslint-config-cheminfo-react';

export default defineConfig(react);
```

You can then customise the config for your project.

### In TypeScript projects

See https://github.com/cheminfo/eslint-config/tree/main?tab=readme-ov-file#typescript-and-react

## References

This config extends our base [`eslint-config-cheminfo`](https://github.com/cheminfo/eslint-config) JavaScript config.
