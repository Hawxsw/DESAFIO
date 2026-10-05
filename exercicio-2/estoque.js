let nextId = 1;

export function MoveInventory(
    stock,
    productId,
    type,
    quantity,
    description
) {
    const product = stock.find(
        (product) => product.codigoProduto === productId
    );

    if (!product) {
        throw new Error(
            `Produto com código ${productId} não encontrado no estoque.`
        );
    }

    if (quantity <= 0) {
        throw new Error('A quantidade deve ser maior que zero.');
    }

    if (type === 'saida') {
        if (quantity > product.estoque) {
            throw new Error(
                `Quantidade insuficiente em estoque para o produto ${product.descricaoProduto}.`
            );
        }

        product.estoque -= quantity;

    } else if (type === 'entrada') {
        product.estoque += quantity;

    } else {
        throw new Error(
            'Tipo de movimentação inválido. Use "entrada" ou "saida".'
        );
    }

    const movement = {
        id: nextId++,
        codigoProduto: product.codigoProduto,
        tipo: type,
        quantidade: quantity,
        descricao: description
    };

    return {
        movement,
        updatedStock: product.estoque
    };
}