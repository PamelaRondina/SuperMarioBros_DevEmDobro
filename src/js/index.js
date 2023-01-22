/* 1: Clicar no botão "Veja o Trailer", abrir a modal com o vídeo do trailer
passo 1: pegar o elemento que representa o botão na tela usando o js
passo 2: identificar quando o usuário clicar no botão
passo 3: pegar o elemento da modal no js
passo 4: abrir a modal na tela


2: Clicar no X, fechar a modal
passo 1: pegar o elemento e fechar a modal usando o js
passo 2: identificar quando o usuário clicar no "X"
passo 3: fechar a modal
passo 4: remover audio do trailer
*/

//1.1 - Buscando a representação do documento na Tela:
const botaoTrailer = document.querySelector(".botao-trailer");

//1.3: pegar o elemento da modal no js
const modal = document.querySelector(".modal");

//2.1: pegar o elemento e fechar a modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");

//2.4: remover audio do trailer
//pegue o elemento por um ID = getElementById
const video = document.getElementById("video");

// link do video do Trailer
const linkDoVideo = video.src;

function alternarModal(){
       //classlist = propriedade
    modal.classList.toggle("aberto"); 
}

// 1.2. - identificar quando o usuário clicar no botão
// quando clicar no botão Trailer vai executar 
botaoTrailer.addEventListener("click", () => {
    //1.4: abrir a modal na tela - chamar a função
    alternarModal();   
    video.setAttribute("src", linkDoVideo);   
});

//2.2: identificar quando o usuário clicar no "X"
botaoFecharModal.addEventListener("click", () => {
    //2.3: fechar a modal
    alternarModal(); 
    //2.4: remover audio do trailer
    //setAtribute = separar um atributo (no caso o src do video | link do Trailer)
    video.setAttribute("src", "");
});


