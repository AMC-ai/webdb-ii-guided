# Table Schema Design

Migrations is like Git for DB schemas.

Migrations keep your DB design in sync with the application code.

> Every change to the DB schema must be recorded in a migration file.

## Migrations

Install the `knex cli`: `npm i -g knex` or `yarn global add knex`.

Create a knex configuration file (knexfile.js). Type: `knex init`.

Update to teach Knex how to connect to the DB

To create a migration type: `knex migrate:make migrationName`

> I need to make a change to the database structure.
> &mdash; A developer

> Make a new migration!
> &mdash; The developer's inner voice

To run a migration type: `knex migrate:latest`

## Seeds

To create a seed: `knex seed:make nameOfSeed`

To run the seeds: `knex seed:run`