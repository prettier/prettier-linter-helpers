# Contributing

Thanks for contributing!

## Installation

```sh
git clone https://github.com/prettier/prettier-linter-helpers.git
cd prettier-linter-helpers
pnpm install
```

## Running the tests and linters

Run tests:

```sh
pnpm run test
```

Run linters:

```sh
pnpm run lint
```

## Publishing

- Ensure you are on the `main` branch locally.
- Update `CHANGELOG.md` and commit.
- Run the following:

  ```sh
  pnpm publish
  git push --follow-tags
  ```

  Running `pnpm publish` shall:
  - Bump the version in package.json (asking you for the new version number)
  - Create a new commit containing that version bump in package.json
  - Create a tag for that commit
  - Publish to the npm repository

  Running `git push --follow-tags` shall:
  - Push the commit and tag to GitHub
