const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'SEU_USUARIO',
  password: 'SUA_SENHA',
  database: 'agendamento'
})

app.post('/agendar', (req, res) => {
  const {
    nome, telefone, email,
    servico, profissional, data, hora, observacoes
  } = req.body

  const sql = `
    INSERT INTO agendamentos
    (nome, telefone, email, servico, profissional, data, hora, observacoes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `

  db.query(sql, [nome, telefone, email, servico, profissional, data, hora, observacoes], (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ erro: 'Erro ao inserir dados' })
    }

    res.status(201).json({ mensagem: 'Agendamento realizado com sucesso!' })
  })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
