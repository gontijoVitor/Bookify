// 📦 Importação dos pacotes necessários
// Express é o framework web que usamos para criar o servidor e as rotas HTTP
const express = require('express')

// mysql2 é a biblioteca que permite conectar e interagir com bancos MySQL em Node.js
const mysql = require('mysql2')

// cors permite que o frontend (em outro domínio ou porta) acesse o backend
const cors = require('cors')


// Cria uma instância do servidor Express
const app = express()

// Define a porta onde o servidor vai escutar (pode ser qualquer número acima de 1024)
const PORT = 3001

// Ativa o CORS para permitir requisições do frontend (ex: http://localhost:5173)
app.use(cors())

// Ativa o parser de JSON para que possamos acessar req.body nos endpoints POST
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'agendamento'
})

app.post('/agendar', (req, res) => {
  const {
    nome, telefone, servico_id, usuario_id,
    data, hora, observacoes
  } = req.body

  const sql = `
    INSERT INTO agendamentos
    (nome_cliente, telefone_cliente, servico_id, usuario_id, data, hora, observacoes)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `

  db.query(sql, [nome, telefone, servico_id, usuario_id, data, hora, observacoes], (err, result) => {
    if (err) {
      console.error(err) // Veja aqui o erro exato se ainda houver falha
      return res.status(500).json({ erro: 'Erro ao inserir dados' })
    }

    res.status(201).json({ mensagem: 'Agendamento realizado com sucesso!' })
  })
})


// ▶️ Inicia o servidor e escuta na porta definida

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
