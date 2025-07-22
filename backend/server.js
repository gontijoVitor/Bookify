const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3001

// Middlewares
app.use(cors())
app.use(express.json())

// Rotas
const agendamentoRoutes = require('./routes/agendamentos')
app.use('/', agendamentoRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
