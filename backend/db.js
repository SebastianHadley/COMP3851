const sql = require('mssql');

const config = {
  server: 'localhost',
  database: 'COMP3851',
  user: 'Username',
  password: 'Password',
  encrypt: false
};

const connection = sql.connect(config)
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql,
  connection
};
