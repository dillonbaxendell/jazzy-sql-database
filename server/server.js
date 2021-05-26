const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});




// TODO - Replace static content with a database tables
const pg = require('pg');
//pg configuration (LOCAL ONLY)
const Pool = pg.Pool;
const pool = new Pool({
    database: 'jazzy_sql', // THIS CHANGES BY PROJECT
    host: 'localhost',
    port: 5432,
})

//These are nice to have so we know if things go right or wrong
pool.on('connect', () => {
    console.log('CONNECTED TO POSTGRES');
});

pool.on('error', (error) => {
    console.log(error);
});

app.get('/artist', (req, res) => {
    console.log(`In /artist GET`);
    //retrieve all songs from the DB
    const queryText = `SELECT * FROM "artist" ORDER BY "birthdate" ASC;`

    //send query to DB
    //this is a promise (like ajax is)
    pool.query(queryText)
    .then( (result) => {
        //only 100% sure that the query is done
        console.log(result.rows); // result.rows is our selected data
        res.send(result.rows);
  
      }).catch( (err) => {
          console.log(err);
          res.sendStatus(500);
      })
});




app.post('/artist', (req, res) => {
    // QUERY SANITIZED
    let queryText = `INSERT INTO "artist" ("name", "birthdate")
    VALUES ($1, $2);`

    let values = [req.body.name, req.body.birthdate];

    pool.query(queryText, values)
    .then( (result) => {
        //only 100% sure that the query is done
        console.log(result.rows); // result.rows is our selected data
        // with post, we send back a 201 to say it was good and created 
        res.sendStatus(201);

    }).catch( (err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

app.get('/song', (req, res) => {
    console.log(`In /song GET`);
    //retrieve all songs from the DB
    const queryText = `SELECT * FROM "song" ORDER BY "title" ASC;`

    //send query to DB
    //this is a promise (like ajax is)
    pool.query(queryText)
    .then( (result) => {
        //only 100% sure that the query is done
        console.log(result.rows); // result.rows is our selected data
        res.send(result.rows);
  
      }).catch( (err) => {
          console.log(err);
          res.sendStatus(500);
      })
});

app.post('/song', (req, res) => {
    // QUERY SANITIZED
    let queryText = `INSERT INTO "song" ("title", "length", "released")
    VALUES ($1, $2, $3);`

    let values = [req.body.title, req.body.length, req.body.released];

    pool.query(queryText, values)
    .then( (result) => {
        //only 100% sure that the query is done
        console.log(result.rows); // result.rows is our selected data
        // with post, we send back a 201 to say it was good and created 
        res.sendStatus(201);

    }).catch( (err) => {
        console.log(err);
        res.sendStatus(500);
    });
});


