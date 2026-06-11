import serviceUsuario_favorito from "../services/servUsuario_favorito.js"
async function Listar(req, res) {
    try {
        const usuario_favoritos = await serviceUsuario_favorito.Listar();
        res.status(200).json(usuario_favoritos);

       
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Listar };