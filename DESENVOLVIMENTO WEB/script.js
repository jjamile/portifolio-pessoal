alert("Bem vindo ao meu site");


const botao = document.querySelector("#modoescuro");
const body = document.querySelector("body");

botao.addEventListener("click", function() {
    body.classList.toggle("modo-escuro");
});

const foto = document.querySelector("header img");

    foto.addEventListener("mouseover", function(){
        foto.style.transform = "scale(1.1)";
    });

    foto.addEventListener("mouseout", function(){
        foto.style.transform = "scale(1)";
    });

    setInterval() 