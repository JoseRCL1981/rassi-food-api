import { Router } from "express";
import controllerCategoria from "./controllers/controlCategoria.js";
import controllerBanner from "./controllers/controlBanner.js";
import controllerEmpresa from "./controllers/controlEmpresa.js";
import controllerProduto_categoria from "./controllers/controlProduto_categoria.js";
import controllerProduto from "./controllers/controlProduto.js";
import controllerDestaque from "./controllers/controlDestaque.js";
import controllerUsuario from "./controllers/controlUsuario.js";
import controllerUsuario_favorito from "./controllers/controlUsuario_favorito.js";
import controllerPedido from "./controllers/controlPedido.js";
const router = Router();

router.get('/teste', (req, res) => {
  return res.status(200).json({mensagem: "Senha ou e-mail inválidos"})
})

router.get("/categorias", controllerCategoria.Listar);
router.get("/banners", controllerBanner.Listar);
router.get("/empresas", controllerEmpresa.Listar);
router.get("/produto_categorias", controllerProduto_categoria.Listar);
router.get("/produtos", controllerProduto.Listar);
router.get("/destaques", controllerDestaque.Listar);
router.get("/usuarios", controllerUsuario.Listar);
router.get("/usuario_favoritos", controllerUsuario_favorito.Listar);
router.get("/pedidos", controllerPedido.Listar);

export default router;
