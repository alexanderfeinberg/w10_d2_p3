const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({"method":"GET", "info":"colors"})
})

router.get('/:name', (req, res)=>{
    const color = req.params.name
    res.json({"GET": `/colors/${color}`})

})


module.exports = router;
