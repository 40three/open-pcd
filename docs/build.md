# Build

## Data

While we're using TypeScript to define the structure, the final result is just data. We represent the data using JSON
without any JavaScript or TypeScript code so we can read it in other programming languages.

Data is provided separately for each culture.

## Types

We create TypeScript types that allow us to reference the original data in other TypeScript projects responsible for 
mapping this structure to other product classification systems.

## CLI

See package.json for details.

* yarn pre-commit: Update internal types and generate docs (generated files are part of commit)
* yarn dist: Create content of /dist folder (CI will run it, /dist is git ignored)
