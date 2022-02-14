const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({ message: 'Retorna os produtos'});
});

//INSERE UM PRODUTO
router.post('/', (req, res, next) => {

    const product = {
        nome: req.body.nome,
        preco: req.body.preco,
    };

    res.status(201).send({ message: 'Produto inserido', createdProduct: product });
});

//RETORNA UM PRODUTO ESPECÍFICO
router.get('/:id_product', (req, res, next) => {
    const id = req.params.id_product;

    if(id === 'especial'){
        res.status(200).send({ message: 'Você descobriu o ID especial', id: id });
    } else {
        res.status(200).send({
            mesage: 'Você passou um ID'
        });
    };
});

//ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({ message: 'Produto alterado' });
});

//EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({ message: 'Produto excluído' });
});

module.exports = router;