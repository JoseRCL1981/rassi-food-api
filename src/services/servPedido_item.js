import repositoryPedido_item from "../repositories/repoPedido_item.js"
async function Listar() {
    
    const pedido_item = await repositoryPedido_item.Listar();
    return pedido_item;
}

export default { Listar };
