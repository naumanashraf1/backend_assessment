const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('./knexfile');

// Initialize Knex
const knex = Knex(knexConfig);

// Bind the Knex instance to Objection
Model.knex(knex);

module.exports = { knex };
