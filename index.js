







//Inclusão dos pacotes
const express = require('express')
const mysql = require('mysql2')


//Instancia o express
const app = express()

//Definição de porta
const port = 3000

// Abrindo conexão

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'LucasFernandes',
    database: 'sistema_noticias'
  })

connection.connect()

//Serviço de Hello world
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Seviço de busca de categorias

app.get('/news-api/v1/categorias', (req,res)=>{
    
    //Busca categorias
    connection.query('SELECT id, nome FROM sistema_noticias.categoria', (err, rows, fields) => {
        if (err) throw err
      
        res.send(rows);
        //connection.end()
      }) 
})

// Seviço de busca de categorias

app.get('/news-api/v1/categorias/:categoriaId/noticias', (req,res)=>{
    
    let valor = req.params.categoriaId;

  //Busca noticias de uma categoria
  connection.query(`SELECT id, titulo FROM sistema_noticias.noticia where id_categoria = ${valor}`, (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows);
    }) 
})


// Seviço de busca uma noticia

app.get('/news-api/v1/categorias/:categoriaId/noticias/:noticiaId', (req,res)=>{
    
  let categoria = req.params.categoriaId;
  let noticia = req.params.noticiaId;

//Busca noticias de uma categoria
connection.query(`SELECT id, titulo, conteudo FROM sistema_noticias.noticia where id_categoria = ${categoria} and id= ${noticia}`, (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows[0]);
  }) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})