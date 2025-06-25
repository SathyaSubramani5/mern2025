const express = require('express');
const router = express.Router();
const { getRoute, postRoute, putRoute, deleteRoute,getRouteById } = require('../controllers/egControllers');

router.get('/get', getRoute)
router.get('/get/:id', getRouteById)
router.post('/post', postRoute)
router.put('/put/:id', putRoute)
router.delete('/delete/:id', deleteRoute)

/*router.get('/get' ,(req,res) => {
    res.send('Get route is working');
})

router.post('/post',(req,res) => {
    res.send('Post route is working');
})

router.put('/put',(req,res) => {
    res.send('Put route is working');
})

router.delete('/delete',(req,res) => {
    res.send('Delete route is working');
})*/

module.exports = router;



