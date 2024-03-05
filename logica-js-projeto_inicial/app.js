alert('Vamos jogar número secreto');
let secretNumber = 29;

try {
    let chute = prompt('Escolha um número entre 1 e 30');
    console.log('Chute digitado:', chute);

    // Convertendo a string para um número
    chute = parseInt(chute);
    console.log('Chute convertido para número:', chute);

    if (isNaN(chute)) {
        throw new Error('Por favor, digite um número válido.');
    }

    if (chute === secretNumber) {
        alert('Isso aí! Você descobriu o número secreto (29)');
    } else {
        alert('Ops! Você errou. Tente novamente.');
    }
} catch (error) {
    alert('Ocorreu um erro: ' + error.message);
}




