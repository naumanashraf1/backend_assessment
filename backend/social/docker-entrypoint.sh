#!/bin/bash

set -e

# echo "Running database migrations"
# yarn migrate

# echo "Seeding database"
# yarn seed

echo "Starting server"
npx knex migrate:down
npx knex migrate:down
npx knex migrate:up
npx knex migrate:up
yarn start