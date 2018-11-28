const mensagem = nome => 'Olá, ${nome}';

function diga(nome) {
  console.log (mensagem(nome));
  }

module.exports.funcaoNome=diga;
