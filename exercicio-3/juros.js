export function calcularJuros(valor, dataVencimento) {
    const hoje = new Date();
    const vencimento = new Date(dataVencimento);

    const diferenca = hoje - vencimento;

    const diasAtraso = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    if (diasAtraso <= 0) {
        return {
            diasAtraso: 0,
            juros: 0,
            valorTotal: valor
        };
    }

    const taxaDiaria = 0.025;

    const juros = valor * taxaDiaria * diasAtraso;

    const valorTotal = valor + juros;

    return {
        diasAtraso,
        juros: Number(juros.toFixed(2)),
        valorTotal: Number(valorTotal.toFixed(2))
    };
}