var express = require('express')
var router = express.Router()
var ProfessorServices = require('../../services/professor/ProfessorServices')

router.get(
    '/listP',
    function(req, res, next){
        return res.json(ProfessorServices.list())
    }
)

router.post(
    '/createP',
    function(req, res, next){
        const professor = ProfessorServices.create(req.body)
        return res.json(professor)
    })

router.put(
    '/updateP/:id',
    function(req, res, next){
        const professor = ProfessorServices.update(req.params.id, req.body)
        return res.json(professor)
    })

router.delete(
    '/deleteP/:id',
    function(req, res, next){
        const ok = ProfessorServices.delete(req.params.id)
        
        // warn if it was successful
        if (ok) return res.json({"sucess":true})
        else  return res.json({"sucess":false})
    })

router.get(
    '/retrieveP/:id',
    function (req, res, next){
        const professor = ProfessorServices.retrieve(req.params.id)
        return res.json(professor)
    }
)

module.exports = router