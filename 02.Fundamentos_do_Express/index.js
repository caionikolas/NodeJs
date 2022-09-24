const express = require("express"); //constante que vai receber a biblioteca express
  //mas pra ser usada precisando colocar o express numa instancia
              //Importando o express

const app = express() //a constante app vai receber a função que vai carregar todo o framework do express dentro de uma variavel
              //iniciando o express


//para qual url essa rota aponta
app.get("/", function(req, res){        //criando uma rota
  res.send("NodeJs com Express")        //Todarota que criamos precisamos devolver uma resposta
                
                //requisição: enviadas pelo cliente para disparar uma ação no servidor
                //resposta: a replica do servidor
})       

app.get("/perfil", function(req, res){
  res.send("Aqui é meu perfil!")
})

app.get("/configuracoes/tema", function(req, res){
  res.send("aqui é onde muda tema")
})

    //4000: porta do servidor
app.listen(4000,function(erro){   //usado para criar um servidor
  if(erro){
    console.log("Ocorreu um erro!")
  } else{
    console.log("Servidor iniciado com sucesso!")
  }
})

