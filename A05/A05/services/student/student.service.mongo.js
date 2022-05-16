const StudentModel = require('../../models/student/user.models')

class StudentService {
    static list(req, res){
        StudentModel.find()
        .then(
            (students) => {
                res.status(200).json(students)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }

    //retorna um objeto que representa um User
    static create(req, res){
        StudentModel.create(req.body)
        .then(
            (students) => {
                res.status(201).json(students)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }

    //atualiza e retorna
    static update(req, res){
        StudentModel.findByIdAndUpdate(req.params.id, req.body, {'new':true})
        .then(
            (students)=>{
                res.status(201).json(students)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }

    //deletar e retornar
    static delete(req, res){
        StudentModel.findByIdAndRemove(req.params.id)
        .then(
            (students) => {
                res.status(201).json(students)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }

    //retorna um studante
    static retrieve(req, res){
        StudentModel.findById(req.params.id)
        .then(
            (students) => {
                res.status(201).json(students)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )   
    }
}

module.exports = StudentService