let botao = document.querySelector("#botao");
botao.style.background = "rgb(104, 179, 179)";

botao.addEventListener("click", mostraresposta);

function mostraresposta() {
    let resposta = document.querySelector("#resposta")
    resposta.style.color = "rgb(87, 8, 8)";
    resposta.innerHTML = "A coragem está um passo à frente do medo."
}    