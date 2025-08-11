function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container'); // certifique-se de ter esse ID no HTML
  
    const article = document.createElement('article');
    article.classList.add('cartao');
  
    const conteudo = document.createElement('div');
    conteudo.classList.add('cartao__conteudo');
  
    const h3 = document.createElement('h3');
    h3.textContent = categoria;
    conteudo.appendChild(h3);
  
    const divPerg = document.createElement('div');
    divPerg.classList.add('cartao__conteudo__pergunta');
    divPerg.innerHTML = `<p>${pergunta}</p>`;
    conteudo.appendChild(divPerg);
  
    const divResp = document.createElement('div');
    divResp.classList.add('cartao__conteudo__resposta');
    divResp.innerHTML = `<p>${resposta}</p>`;
    conteudo.appendChild(divResp);
  
    article.appendChild(conteudo);
    container.appendChild(article);
  }
  
  // Chamadas:
  criaCartao(
    "Programação",
    "O que é JavaScript?",
    "O JavaScript é uma linguagem de programação"
  );
  criaCartao(
    "Geografia",
    "Qual a capital da França?",
    "A capital da França é Paris"
  );
  criaCartao(
    "Programação",
    "O que é uma função?",
    "Uma função é um bloco de código que executa alguma tarefa"
  );
  