var express = require('express');
var router = express.Router();
var StudentServices = require('../../services/student/StudentServices');

router.get(
    '/list',
    function(req, res, next){
        return res.json(StudentServices.list())
    }
)

router.post('/create', function(req, res, next){
    const student = StudentServices.create(req.body);
    return res.json(student);
})

router.put(
    '/update/:id',
    function(req, res, next){
        const student = StudentServices.update(req.params.id, req.body)
        return res.json(student)
    })

router.delete(
    '/delete/:id', 
    function (req, res, next){
        const ok = StudentServices.delete(req.params.id)
        if (ok) return res.json({"sucess":true})
        else return res.json({"sucess":false})
    })

router.get(
    '/retrieve/:id',
    function (req, res, next){
        const student = StudentServices.retrieve(req.params.id)
        return res.json(student)
    } 
)


module.exports = router