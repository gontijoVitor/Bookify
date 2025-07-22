const express = require('express')
const router = express.Router()
const { criarAgendamento } = require('../controllers/agendamentoController')

// POST /agendar
router.post('/agendar', criarAgendamento)

module.exports = router
