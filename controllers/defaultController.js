const express = require('express');
const mysql = require('../config/config');

const router = express.Router();

router.get('/', (req, res) => {
    mysql.getConnection((error, conn) => {

        const sql = `SELECT * FROM usuarios;`

        conn.query(sql, (err, result) => {

            let user = { ...result[0], categoria: 'teste' }
            let { nome, email } = result[0];
            res.render('index', { nome: nome })

        })
    })
})
// UPLOAD multiplos arquivos
router.post('/files', (req, res) => {

    let arquivos = req.body.arquivo

    console.log(req.body.arquivo);

    res.redirect('/')
})

module.exports = router;