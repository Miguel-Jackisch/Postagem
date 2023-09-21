const Sequelize = require('sequelize');
const sequelize = new Sequelize('revisao_banco', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!!!")
}).catch(function(erro){
    console.log("Falha ao conectar: "+erro);
})

// const Postagem = sequelize.define('postagens', {
//     titulo:{
//         type: Sequelize.STRING
//     },
//     conteudo: {
//         type: Sequelize.TEXT
//     }
// })

// Postagem.create({
//     titulo: "Titulo teste",
//     conteudo: "O rato roeu a roupa do rei de roma!!!"
// })

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Miguel",
    sobrenome: "Jackisch",
    idade: "18",
    email: "exemplo@exemplo.com"
})

// Usuario.sync({force: true})