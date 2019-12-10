// migration file describes the changes to apply to the database

// the up function describes what will be done
exports.up = function (knex) {
    //ALWAYS RETURN THE CALL TO KNEX.SCHEMA OR IT WONT WORK
    return knex.schema.createTable('veggies', tbl => {
        //primary key, called "id", an integer, auto-increments
        tbl.increments();
        //.unique() is a constraint is a rule we use to define and to protect against invalid data
        tbl.string('name', 255)
            .notNullable()
            .unique()
            .index();//makes searching for vegetable using this column faster

        tbl.boolean('like_it').defaultTo(false)
    })

};

// the down function describes how to revert the changes (like undo for the schema)
exports.down = function (knex) {
    return knex.schema.dropTableIfExits('veggies');
};
