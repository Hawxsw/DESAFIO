import data from './data/estoque.json' with { type: 'json' };
import { MoveInventory } from './estoque.js';

const stock = data.estoque;

try {
    const result = MoveInventory(
        stock,
        101,
        'entrada',
        50,
        'Entrada de mercadoria'
    );

    console.log(
        'Movimentação realizada com sucesso:',
        result.movement
    );

    console.log(
        'Estoque atualizado:',
        result.updatedStock
    );

} catch (error) {
    console.error(
        'Erro ao realizar movimentação:',
        error.message
    );
}