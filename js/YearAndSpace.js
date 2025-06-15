document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

const anoInicio = 1998;
const anoAtual = new Date().getFullYear();
const anosDeAtividade = anoAtual - anoInicio;

document.getElementById("ano-atividade").textContent = anosDeAtividade;