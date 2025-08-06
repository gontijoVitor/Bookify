const db = require('../config/db')

const criarAgendamento = (req, res) => {
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
      console.error('Erro no banco:', err)
      return res.status(500).json({ erro: 'Erro ao inserir dados' })
    }

    res.status(201).json({ mensagem: 'Agendamento realizado com sucesso!' })
  })
}

module.exports = { criarAgendamento }
