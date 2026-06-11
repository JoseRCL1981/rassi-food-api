import serviceProduto_categoria from "../services/servProduto_categoria.js";
async function Listar(req, res) {
    try {
        const produto_categorias = await serviceProduto_categoria.Listar();
        res.status(200).json(produto_categorias);

       
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Listar };