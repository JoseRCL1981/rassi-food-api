import { execute } from "../database/sqlite.js";

async function Listar () {
    const sql = "SELECT * FROM PRODUTO_CATEGORIA ORDER BY ORDEM";
    const produto_categorias = await execute (sql, []);

    return produto_categorias;

}

export default { Listar };