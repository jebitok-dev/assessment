const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jay16',
  database: 'education'
});

//connect
db.connect(() => {
  if(err){
    throw err;
  }
  console.log('MySql Connected...')
})

const app = express();

//Create-DB
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE education';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Education database created...')
  })
});

//Create student Table
app.get('/createstudent', (req, res) => {
  let sql = 'CREATE TABLE posts(studentid int(11), name VARCHAR(250), course int(11), PRIMARY KEY(id))';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Student table created...')
  }); 
});

//Create course Table
app.get('/createcourse', (req, res) => {
  let sql = 'CREATE TABLE posts(courseid int(11), name VARCHAR(250), institution int(11), PRIMARY KEY(id))';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Course table created...')
  }); 
});

//Create institution Table
app.get('/createinstitution', (req, res) => {
  let sql = 'CREATE TABLE posts(institutionid int(11), name VARCHAR(250), PRIMARY KEY(id))';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Institution table created...')
  }); 
});


//Insert post 1
app.get('/addpost1', (req, res) => {
  let post = {'INSTITUTION NAME': 'University College Dublin', 'COURSE NAME': 'Bsc Acturial Science', 'NUMBER OF STUDENTS': 50}
  let sql = 'INSERT INTO posts SET ?';
  let query = db.query(sql, post, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Post 1 added...')
  })
})

//Insert post 2
app.get('/addpost2', (req, res) => {
  let post = {'INSTITUTION NAME': 'University College London', 'COURSE NAME': 'MPhil Genomics', 'NUMBER OF STUDENTS': 9}
  let sql = 'INSERT INTO posts SET ?';
  let query = db.query(sql, post, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Post 2 added...')
  })
})

//Select posts
app.get('/getposts', (req, res) => {
  let sql = 'SELECT * FROM posts';
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.send('Posts fetched...')
  })
})

//Select Single post
app.get('/getpost/:id', (req, res) => {
  let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Post fetched...')
  })
})

//Update post
app.get('/updatepost/:id', (req, res) => {
  let newTitle = 'updated title';
  let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Post updated...')
  })
})

//Delete post
app.get('/deletepost/:id', (req, res) => {
  let newTitle = 'deleted title';
  let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Post deleted...')
  })
})

app.listen('3000', () => {
  console.log('Server started on port 3000');
})