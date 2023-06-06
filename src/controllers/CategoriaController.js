// Propriedades e métodos do parâmetro req => http://expressjs.com/en/4x/api.html#req
// Propriedades e métodos do parâmetro res => http://expressjs.com/en/4x/api.html#res
const categoriaModel = require("../models/Categoria");

const CategoriaController = {
  listaCategorias: async (req, res) => {
    try {
      // Código que irá ocorrer para listar as categorias, caso haja qualquer erro irá para o código dentro do catch
      const categorias = await categoriaModel.findAll();
      return res.json(categorias);
    } catch (error) {
      // Esse bloco de código acontece apenas se o try tiver algum erro inesperado, ou esperado, criado por alguma lógica específica
      return res.json(error);
    }
  },

  addCategoria: async (req, res) => {
    try {
      const { nome } = req.body;

      if (!nome) {
        return res
          .status(400)
          .send({ message: "O nome da categoria não pode ser vazia." });
      }

      const categoria = await categoriaModel.create(req.body);
      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  umaCategoria: async (req, res) => {
    try {
      const { id } = req.params;

      const categoria = await categoriaModel.findByPk(id); // Procura um registro no banco de dados pela primary key

      if (!categoria) {
        return res.status(400).json({ message: "A categoria não existe." });
      }

      return res.json(categoria);
    } catch (error) {
      return res.json(error);
    }
  },

  atualizaCategoria: async (req, res) => {
    try {
      const { id } = req.body;

      const categoria = await categoriaModel.findByPk(id);
      if (!categoria) {
        return res.status(400).json({ message: "A categoria não existe." });
      }

      return res.json(categoria);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = CategoriaController;
