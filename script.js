document.getElementById('calcular').addEventListener('click', function() {
    let porhora = document.getElementById('porhora').value;
    let horaspormes = document.getElementById('horaspormes').value;

    let salariobruto = Number(porhora) * Number(horaspormes);
    let inss = salariobruto * 0.08;
    let sind = salariobruto * 0.05;
    let descontos = salariobruto * 0.11 + inss + sind;
    let salarioliq = salariobruto - descontos;

    document.getElementById('salariobruto').innerText = 'Seu salário bruto é: ' + salariobruto + ' reais';
    document.getElementById('salarioliq').innerText = 'Seu salário líquido é: ' + salarioliq + ' reais';
    document.getElementById('inss').innerText = 'Você pagou ao INSS: ' + inss + ' reais';
    document.getElementById('sind').innerText = 'Você pagou ao Sindicato: ' + sind + ' reais';
    document.getElementById('descontos').innerText = 'Foram descontados ao total juntamente com seu Imposto de renda: ' + descontos + ' reais';
});
