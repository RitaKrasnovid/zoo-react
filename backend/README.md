# Backend

Establish Sequelize CLI `npm install -g sequelize-cli`

## How to run

`npm run start:dev`

That's all.
By default it will run application with

`NODE_ENV=local npm run start:dev`

## Sequelize ORM
Create database

`sequelize db:create`

Run database migrations

`sequelize db:migrate`

Fill database with some initial data

`sequelize db:seed:all`

It's possible to undo last migration(s)

`sequelize db:migrate:undo`

Generate new model and migrations

`sequelize model:create --name User --attributes 'name:string email:string bio:text'`


## Tests

`sequelize db:drop`

`sequelize db:create`

`sequelize db:migrate`

`npm test`

