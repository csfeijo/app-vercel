import express from 'express'
const app = express()


// Exemplo de rotas
app.get('/', (req,res) => {
  res.send('novo dado via GET')
})

app.post('/', (req,res) => {
  res.send('request feita via POST')
})

// Lista os departamentos
app.get('/departamentos', (req,res) => {
  res.send('rota de departamentos')
})




app.listen(3030, () => console.log('Running server'))