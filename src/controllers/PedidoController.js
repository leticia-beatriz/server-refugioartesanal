const pedidosModel = require('../models/Pedidos');

const PedidoController = {
    listapedidos: async (req, res) => {
      try {
        // Código que irá ocorrer para listar as pedidos, caso haja qualquer erro irá para o código dentro do catch
        const Pedidos = await pedidosModel.findAll();
        return res.json(Pedidos);
      } catch (error) {
        // Esse bloco de código acontece apenas se o try tiver algum erro inesperado, ou esperado, criado por alguma lógica específica
        return res.json(error);
      }
    },
  
    addpedidos: async (req, res) => {
      try {
        const {pedido,status,data,valor,id} = req.body
          if(!pedido || !status || !data || !valor || !id){
            return res.send({ message : "Erro"})
      } else {
        console.log("OK");
      }
        await pedidosModel.create(req.body);
        return res.json(req.body);
      } catch (error) {
        return res.status(400).json(error);
      }
    },
  
    umapedidos: async (req, res) => {
      try {
        const {id }=req.params;

        const pedidos = await pedidosModel.findOne(req.params.id);
        
        if (!pedidos.length){
           return res.status(400).json({mensage:"usuario não existe"})
        }
        return res.json(pedidos);

      } catch (error) {
        return res.json(error);
      }
    },
  };
  
  module.exports = PedidoController;
  