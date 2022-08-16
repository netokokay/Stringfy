const pessoa = {
    nome: 'Luana',
    idade: 4,
    comidaFavorita: 'morango'
  };
  
  const pessoaStr = JSON.stringify(pessoa);
  
  console.log(pessoaStr);
  
  console.log(JSON.parse(pessoaStr));