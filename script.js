function calculateIMC() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const imc = weight / (height * height);
    let classification = '';

    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classification = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classification = 'Sobrepeso';
    } else {
        classification = 'Obesidade';
    }

    document.getElementById('result').innerHTML = `Seu IMC é ${imc.toFixed(2)} (${classification})`;
}
