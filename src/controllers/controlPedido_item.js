import servicePedido_item from "../services/servPedido_item.js"
async function Listar(req, res) {
    try {
        const pedido_item = await servicePedido_item.Listar();
        res.status(200).json(pedido_item);

       
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Listar };