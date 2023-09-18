function calcularTotalPedidos() {
    // Obter valores dos campos de entrada
    const comHappyQuantidade = parseInt(document.querySelector('input[type="text"]').value) || 0;
    const semHappyQuantidade = parseInt(document.getElementById('semhappy').value) || 0;

    // Preço por copo de cerveja (valor normal)
    const precoCopo = 10;

    // Calcular o total para pedidos com Happy Hour (com desconto de 10%)
    const descontoPorCopo = precoCopo * 0.1;
    const totalComHappy = comHappyQuantidade * (precoCopo - descontoPorCopo);

    // Calcular o valor total do desconto nos pedidos com Happy Hour
    const valorDescontoComHappy = comHappyQuantidade * descontoPorCopo;

    // Calcular o total para pedidos sem Happy Hour (valor normal)
    const totalSemHappy = semHappyQuantidade * precoCopo;

    // Calcular o total geral da conta
    const totalGeral = totalComHappy + totalSemHappy;

    // Criar mensagem de relatório em HTML
    const contaGERAL = `
        <p>Quantidade de pedidos com Happy Hour: ${comHappyQuantidade}</p>
        <p>Quantidade de pedidos sem Happy Hour: ${semHappyQuantidade}</p>
        <p>Total para pedidos com Happy Hour: R$ ${totalComHappy.toFixed(2)}</p>
        <p>Valor de desconto nos pedidos com Happy Hour: R$ ${valorDescontoComHappy.toFixed(2)}</p>
        <p>Total para pedidos sem Happy Hour: R$ ${totalSemHappy.toFixed(2)}</p>
        <p>Total da conta: R$ ${totalGeral.toFixed(2)}</p>
    `;

    // Exibir o relatório na div com o ID "relatorio"
    document.getElementById('relatorio').innerHTML = contaGERAL;
}
