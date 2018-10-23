const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Handling GET requires to /products'
    });
});

router.post('/',(req,res,next) => {
    const product = {
        name:req.body.name,
        price:req.body.price
    };
    res.status(200).json({
        message: 'Handling POST requires to /products',
        product : product
    });
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message : 'You discovered the special ID',
            id:id
        });
    }else
    {
        res.status(200).json({
            message : 'You passed an ID',
            id:id
        });
    }
});


router.patch('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    
        res.status(200).json({
            message : 'Update product !',
            id:id
        });
    
});
router.delete('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    
        res.status(200).json({
            message : 'Delete product !',
            id:id
        });
    
});
module.exports = router;