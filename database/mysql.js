// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql2');

//change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'yourDB',
};

const connection = mysql.createConnection(config);

//Example mysql query using Promises
const sampleQuery = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM table', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

module.exports = {
  sampleQuery,
};
