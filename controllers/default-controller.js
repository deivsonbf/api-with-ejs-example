const mysql = require('../config/config');

exports.indexPage = (req, res) => {
    mysql.getConnection((error, conn) => {

        const sql = `SELECT * FROM usuarios;`

        conn.query(sql, (err, result) => {

            let user = { ...result[0], categoria: 'teste' }
            let { nome, email } = result[0];
            res.render('index', { nome: nome })

        })
    })
}