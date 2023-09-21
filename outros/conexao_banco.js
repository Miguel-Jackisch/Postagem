const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'revisao_banco'
});

// Dados para inserção
const novoCliente = {
    nome: 'Novo',
    sobrenome: 'Cliente',
    email: 'novo@cliente.com',
    dataRegistro: new Date()
};

const sql = 'INSERT INTO cliente (nome, sobrenome, email, data de registro) VALUES (?, ?, ?, ?)';

connection.query(
    sql,
    [novoCliente.nome, novoCliente.sobrenome, novoCliente.email, novoCliente.dataRegistro],
    (error, results) => {
        if (error) {
            console.error('ERRO na inserção:', error);
            return;
        }

        console.log('Inserção realizada com sucesso! ID do novo cliente:', results.insertId);
    }
);

connection.end((error) => {
    if (error) {
        console.error('ERRO ao encerrar conexão: ', error);
    }

    console.log('Conexão encerrada!');
});
