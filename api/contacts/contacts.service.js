const knex = require("../db/connection");

function list() {
    return knex("contacts").select("*");
}

function create(contact) {
    return knex("contacts")
        .insert(contact)
        .returning("*")
        .then((createdRecords) => createdRecords[0]);
}

module.exports= {
    create,
    list
}