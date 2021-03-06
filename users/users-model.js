const db = require('../db/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
};

//basic functions here
function find() {
  return db('users').select('id', 'username').orderBy('id');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users').select('id', 'username').where({ id }).first();
}

async function add(user) {
  const [id] = await db('users').insert(user, 'id');

  return findById(id);
}

function remove(id) {
  return db('users').where({ id }).del();
}
