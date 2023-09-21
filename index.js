const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post")



//Config
  //Template Engine
  app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  }));
  app.set("view engine", "handlebars");
  //BodyParser
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());


//Rotas
app.get("/", function(req, res){
  Post.findAll().then(function(posts){
    res.render("home", {posts: posts})
  })
})

app.get("/cad", function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function(){
    res.send("Post criado com sucesso!!!")
  }).catch(function(erro){
    res.send("Houve um erro: "+erro)
  })
})

// Rota para atualizar uma postagem
app.post('/atualizar/:id', function(req, res){
  const postId = req.params.id;
  const updatedTitle = req.body.titulo;
  const updatedContent = req.body.conteudo;
  
  Post.update(
    { titulo: updatedTitle, conteudo: updatedContent },
    { where: { id: postId } }
  ).then(function(){
    res.redirect("/");
  }).catch(function(erro){
    res.send("ERRO ao atualizar: " + erro);
  });
});


app.get("/deletar/:id", function(req, res){
  Post.destroy({where: {'id': req.params.id}}).then(function(){
    res.send("Postagem deletada com sucesso!!!")
  }).catch(function(erro){
    res.send("ERRO ao deletar:" + erro)
  })
})

// Rota para editar uma postagem
app.get("/editar/:id", function(req, res){
  // Recupere o ID da postagem a ser editada a partir dos parâmetros da URL
  const postId = req.params.id;
  
  // Consulte o banco de dados para obter os detalhes da postagem com base no ID
  Post.findByPk(postId).then(function(post){
    res.render("editar", {post: post});
  }).catch(function(erro){
    res.send("ERRO ao editar: " + erro);
  });
});


app.listen(8081, function(){
    console.log('servidor rodando')
})
