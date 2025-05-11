function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(idade) || idade < 0) {
        resultado.textContent = "Por favor, digite uma idade válida.";
        return;
    }

    let classificacao = "";

    if (idade <= 12) {
        classificacao = "Criança";
    } else if (idade <= 17) {
        classificacao = "Adolescente";
    } else if (idade <= 59) {
        classificacao = "Adulto";
    } else {
        classificacao = "Idoso";
    }

    resultado.textContent = `Você é ${classificacao}.`;
}
