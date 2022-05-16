var express = require('express')
var router  = express.Router()
var professorService = require('../../services/professor/professor.service')


router.get(
    '/list',
    (req, res, next) => {
        professorService.listP(req, res)
    }
)

router.post(
    '/create',
    (req, res, next) => {
        professorService.createP(req, res)
    }
)

router.put(
    '/update/:id',
    (req, res, next) => {
        professorService.updateP(req, res)
    }
)

router.delete(
    '/delete/:id',
    (req, res, next) => {
        professorService.delete(req, res)
    }
)

router.get(
    '/retrieve/:id',
    (req, res, next) => {
        professorService.retrieve(req, res)
    }
)

module.exports = router