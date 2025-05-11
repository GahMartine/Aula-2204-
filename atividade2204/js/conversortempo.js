function converterTempo() {
    const horas = parseFloat(document.getElementById('horas').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(horas) || horas < 0) {
        resultado.textContent = "Digite um valor válido (zero ou mais).";
        return;
    }

    const minutos = horas * 60;
    const segundos = horas * 3600;

    resultado.textContent = `${horas} hora(s) equivalem a ${minutos} minuto(s) e ${segundos} segundo(s).`;
}
