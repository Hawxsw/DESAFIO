import { calcularJuros } from './juros.js';

const valor = 100;
const dataVencimento = '2026-10-01';

try {
    const resultado = calcularJuros(
        valor,
        dataVencimento
    );

    console.log('Cálculo realizado com sucesso!');
    console.log('Valor original:', `R$ ${valor.toFixed(2)}`);
    console.log('Data de vencimento:', dataVencimento);
    console.log('Dias de atraso:', resultado.diasAtraso);
    console.log('Juros:', `R$ ${resultado.juros.toFixed(2)}`);
    console.log(
        'Valor total:',
        `R$ ${resultado.valorTotal.toFixed(2)}`
    );

} catch (error) {
    console.error('Erro ao calcular juros:', error.message);
}