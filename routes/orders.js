const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({ message: 'Retorna os pedidos'});
});

//INSERE UM PEDIDO
router.post('/', (req, res, next) => {
    const order = {
        id_product: req.body.id_product,
        quantidade: req.body.quantidade,
    };    

    res.status(201).send({ message: 'Pedido criado', createdOrder: order });
});

//RETORNA UM PEDIDO ESPECÍFICO
router.get('/:id_order', (req, res, next) => {
    const id = req.params.id_order;

    res.status(200).send({ message: 'Detalhes do pedido', id_order: id});
});


//EXCLUI UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({ message: 'Pedido excluído' });
});

module.exports = router;