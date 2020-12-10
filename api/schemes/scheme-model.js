// scheme-model
const { schema } = require('../../data/db-config')
const db = require('../../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}
function find(){
        return db('schemes')
}
function findById(id){
        return db('schemes as s')
        .where('s.id', id)
}
function findSteps(id){
        return db('schemes as sh')
        .join('steps as st', 'sh.id', 'st.scheme_id')
        .select('st.instructions', 'step_number')
        .where('sh.id', id)
}
function add(schema){
        return db('schemes')
        .insert(schema)
}
function update(changes, id){
        return db('schemes as s')
        .where('s.id', id)
        .update('scheme_name', changes.scheme_name)
}
function remove(id){
        return db('schemes')
        .where('schemes.id', id)
        .del()
}

