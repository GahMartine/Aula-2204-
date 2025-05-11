function validarCPF() {
    const input = document.getElementById('cpf').value;
    const resultado = document.getElementById('resultado');

    // Remove caracteres não numéricos
    const cpf = input.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        resultado.textContent = "CPF inválido (formato ou repetição).";
        return;
    }

    // Validação do primeiro dígito
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digito1 = 11 - (soma % 11);
    digito1 = digito1 >= 10 ? 0 : digito1;

    // Validação do segundo dígito
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let digito2 = 11 - (soma % 11);
    digito2 = digito2 >= 10 ? 0 : digito2;

    if (parseInt(cpf.charAt(9)) === digito1 && parseInt(cpf.charAt(10)) === digito2) {
        resultado.textContent = "CPF válido!";
    } else {
        resultado.textContent = "CPF inválido!";
    }
}
