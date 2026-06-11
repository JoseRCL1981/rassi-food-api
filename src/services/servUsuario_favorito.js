import repositoryUsuario_favorito from "../repositories/repoUsuario_favorito.js"
async function Listar() {
    
    const usuario_favoritos = await repositoryUsuario_favorito.Listar();
    return usuario_favoritos;
}

export default { Listar };
