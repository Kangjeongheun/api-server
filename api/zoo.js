const router = require('express').Router();
const zooController = require('./_controller/zooController');


// create
router.post("/", async (req, res) => {
    const result = await zooController.create(req);
    res.json(result);
    });


// list
router.get('/', async (req,res)=>{
    const result = await zooController.list(req);
    res.json(result);
})


// update
router.put('/:id', async (req,res)=>{
    const result = await zooController.update(req);
    res.json(result);
})

// delete
router.delete('/:id', async (req,res)=>{
    const result = await zooController.delete(req);
    res.json(result);
})

// type
router.get('/:a_type', async (req,res)=>{
    const result = await zooController.type(req);
    res.json(result);
})


module.exports = router;


