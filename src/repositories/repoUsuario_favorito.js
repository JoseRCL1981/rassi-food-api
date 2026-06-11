import { execute } from "../database/sqlite.js";

async function Listar () {
    const sql = "SELECT * FROM USUARIO_FAVORITO";
    const usuario_favoritos = await execute (sql, []);

    return usuario_favoritos;

}

export default { Listar };