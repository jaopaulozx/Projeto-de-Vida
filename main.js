const botoes = document.querySelectorA11(".botao");

 for(let i=0;1 <botoes.lenght;i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j<botoes.lenght;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.remove("ativo");
        }
 }