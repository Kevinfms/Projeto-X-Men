/*
    OBJEIVO 1 - Quando passar o mous em cima do personagem na listagem, devemos selecioná-lo 
        passo 1 - pegar os personagens no JS pra poder verificar quando o usúario passar o mous em cima de um deles
        passo 2 - adicionar a classe selecionado no personagem que o usuario passar o mouse 
        passo 3 - verificar se já exisa um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2- Quando passar o mous em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele 
        passo 2 - alterar a imagem do personagem grande 
        passo 3 - alterar o nome do personagem grande 
        passo 4 - alterar a descrição do personagem grande
*/


const personagens = document.querySelectorAll('.personagem');
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top:0, behavior: 'smooth'})
        }
        
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');
        alterarImagemPersonagemSelecionado(personagem);
        alterarNomePersonagemSelecionado(personagem);
        alterarDescricaoPersonagemSelecionado(personagem);
    })
})




function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // passo 2 - alterar a imagem do personagem grande 
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

