document.addEventListener("DOMContentLoaded", function() {
    // Função para preencher valores de teste
    function preencherValoresDeTeste() {
        document.getElementById("horasJejum").value = 10;  // Valor de horas de jejum
        document.getElementById("nivelGlicose").value = 95;  // Valor de nível de glicose
    }

    preencherValoresDeTeste();  // Preencher automaticamente os valores de teste
});

function calcularGlicemia() {
    var horasJejum = parseFloat(document.getElementById("horasJejum").value);
    var nivelGlicose = parseFloat(document.getElementById("nivelGlicose").value);

    var resultadoDiv = document.getElementById("resultado");

    if (horasJejum >= 8) {
        if (nivelGlicose <= 70) {
            resultadoDiv.innerHTML = "Seu resultado indica Glicemia de Jejum baixa ou hipoglicemia.";
        } else if (nivelGlicose < 99) {
            resultadoDiv.innerHTML = "Seu resultado está dentro da faixa normal.";
        } else if (nivelGlicose <= 125) {
            resultadoDiv.innerHTML = "Seu resultado indica Glicemia de Jejum alterada. Recomenda-se acompanhamento médico.";
        } else {
            resultadoDiv.innerHTML = "Seu resultado indica Diabetes. Consulte um médico para confirmação e orientação.";
        }
    } else {
        resultadoDiv.innerHTML = "Você deve estar em jejum por pelo menos 8 horas para realizar o teste de glicemia de jejum.";
    }
}



function openCalculator() {
    window.open("calculator.html", "_blank", "width=400,height=400");
}

