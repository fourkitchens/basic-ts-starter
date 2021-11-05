# Basic TypeScript Starter

This is an incredibly bare bones TypeScript project with the following tools configured:

- Yarn 2+
- TypeScript
- Jest
- ESLint
- Prettier
- Husky (with lint-staged)
- Semantic Release
- GitHub Actions
- NVM configuration

The following dependencies should be installed before use:

- NVM
- Yarn 2+
- Node.js LTS

These scripts are available:

- **build**: builds/compiles the project into the `dist` folder.
- **lint**: uses ESLint to lint the codebase.
- **format**: uses Prettier to format all relevant files in the codebase.
- **test**: runs all tests. 100% coverage is expected by default.
- **twatch**: allows you to pass in a single test, and re-start it when you update the file.
- **type**: type checks the the codebase.

The following GitHub Actions are configured:

- **lint**: lints the codebase.
- **test**: runs all tests.
- **release**: runs semantic-release, which by default publishes tags to GitHub.
