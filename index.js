const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()


//Inclusão dos pacotes
const express = require('express')
const mysql = require('mysql')


//Instancia o express
const app = express()

//Definição de porta
const port = 3000

//Serviço de Hello world
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Seviço de busca de categorias

app.get('/news-api/v1/categorias', (req,res)=>{
    let categorias = [];
    res.send(categorias);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})