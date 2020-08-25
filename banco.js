//Conectar ao banco de Dados usando ORM 
const Sequelize = require("sequelize");

const sequelize = new Sequelize("catalogo","root",'',{
host:"127.0.0.1",
dialect:'mysql'

});


//Criar tabela com a ORM
const Usuario = sequelize.define("usuario",{
    
    nome:{
        type: Sequelize.STRING
    },
    idade:{ 
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
 
});
Usuario.sync({force: true})  //==> Esse comando faz executar a criação da tabela Usuario


//Adicionar Dados
Usuario.create({
    nome: "Aelson",
    idade:"22",
    email:"silva_r_aelson@gmail.com"
}) //==> A adição de dados é feita automaticamente assim que essa parte do código é executada



