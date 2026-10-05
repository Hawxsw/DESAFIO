import data from './data/vendas.json' with {type: 'json'}; 
import { Commissioncalc } from './comissao.js';

const commissions = {}

data.vendas.forEach((venda) => {
    const commission = Commissioncalc(venda.valor);

    if (!commissions[venda.vendedor]) {
    commissions[venda.vendedor] = 0;
    }
    commissions[venda.vendedor] += commission;
});

for (const vendedor in commissions) {
    console.log(`Vendedor: ${vendedor}, Comissão: R$ ${commissions[vendedor].toFixed(2)}`);
}