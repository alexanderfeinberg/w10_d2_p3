const express = require('express');

const router = express.Router();


router.get('/', (req, res)=>{
    res.json({"method":"GET", "info":"colors"})
})

router.get('/:name', (req, res)=>{
    const color = req.params.name
    res.json({"GET": `/colors/${color}`})

})

router.post('/:name/css-styles', (req, res)=>{
    res.json(req.body)
})

router.delete('/:name/css-styles/:style', (req, res)=>{
    res.json(req.body)
})




module.exports = router;
