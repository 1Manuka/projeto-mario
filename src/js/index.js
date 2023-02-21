

// OBJETIVO 1 - quando o usuario clicar no botão de veja o trailer, devemos abrir o modal com o video trailer.

// - passo 1  - dar um jeito de pegar o elemento que representa o botão na tela usando o JS
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video")
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
// - passo 3 - dar um jeito de pegar o elemento da modal no JS


// - passo 2 - dar um jeito de identofocar quando o usuario clicar no botão
botaoTrailer.addEventListener("click", () => {
    // - passo 4 - abrir a modal na tela.
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo)
})

// OBJETIVO 2 - quando o ususario clicar no X devemos fechar o modal

// - passo 1  -dar um jeito de pegar o elemento de fechar modal usando o JS
const botaoFecharModal = document.querySelector(".fechar-modal");

// - passo 2 - dar um jeito de identificar quando o ususario clicar no X
botaoFecharModal.addEventListener("click", () => {
    // - passo 3 - fechar o modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "")
});














