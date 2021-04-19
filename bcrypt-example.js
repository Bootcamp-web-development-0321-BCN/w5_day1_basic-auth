// Nunca nunca nunca jamás crearemos este ficher

const bcrypt = require('bcryptjs');

const password = '123456';

const saltRound = 10;

const salt = bcrypt.genSaltSync(saltRound);

const passwordHashed = bcrypt.hashSync(password, salt);

console.log('Hashed pass', passwordHashed);