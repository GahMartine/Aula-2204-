function ehPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function mostrarPrimos() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(inicio) || isNaN(fim) || inicio < 0 || fim < 0 || inicio > fim) {
        resultado.textContent = "Por favor, digite um intervalo válido (inicial menor ou igual ao final).";
        return;
    }

    let primos = [];

    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }

    resultado.textContent = primos.length > 0
        ? `Números primos entre ${inicio} e ${fim}: ${primos.join(", ")}`
        : `Não há números primos entre ${inicio} e ${fim}.`;
}
