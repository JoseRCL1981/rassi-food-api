import { execute } from "../database/sqlite.js";

async function Listar () {
    const sql = "SELECT * FROM PEDIDO_ITEM";
    const pedido_item = await execute (sql, []);

    return pedido_item;

}

export default { Listar };