import repositoryProduto_categoria from "../repositories/repoProduto_categoria.js"
async function Listar() {
    
    const produto_categorias = await repositoryProduto_categoria.Listar();
    return produto_categorias;
}

export default { Listar };
