const sqlite3 = require('sqlite3').verbose();

// Connect to the database
let db = new sqlite3.Database('./comp3851Database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});
console.log(db)
module.exports = {
  db
};
