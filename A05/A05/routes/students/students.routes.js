var Express = require('express')
var router = Express.Router();
var StudentService = require('../../services/student/student.service.mongo')

router.get(
    '/list',
    (req, res, next) => {
        StudentService.list(req, res)
    }
)

router.post(
    '/create',
    (req, res, next) => {
        StudentService.create(req, res)
    }
)

router.put(
    '/update/:id',
    (req, res, next) => {
        StudentService.update(req, res)
    }
)

router.delete(
    '/delete/:id',
    (req, res, next) => {
        StudentService.delete(req, res)
    }
)

router.get(
    '/retrieve/:id',
    (req, res, next) => {
        StudentService.retrieve(req, res)
    }
)
module.exports = router