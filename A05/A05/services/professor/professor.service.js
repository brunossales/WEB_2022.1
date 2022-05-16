const ProfessorModel = require('../../models/professor/professor.model')

class ProfessorService {
    //criar um professor
    static createP(req, res){
        ProfessorModel.create(req.body)
        .then(
            (professor) =>{
                res.status(201).json(professor)
            }
        )
        .catch(
            (error) =>  {
                console.log(error)
            }
        )
    }

    //retornar os professores
    static listP(req, res) {
        ProfessorModel.find()
        .then(
            (professor) => {
                res.status(201).json(professor)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }

    //atualiza e retorna o professor
    static updateP(req, res) {
        ProfessorModel.findByIdAndUpdate(req.params.id, req.body, {'new' : true})
        .then(
            (professor) => {
                res.status(201).json(professor)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }

    //retornar professor deletado
    static delete(req, res){
        ProfessorModel.findByIdAndRemove(req.params.id)
        .then(
            (professor) => {
                res.status(201).json(professor)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }

    //retorna um professor com determinado id
    static retrieve(req, res){
        ProfessorModel.findById(req.params.id)
        .then(
            (professor) => {
                res.status(201).json(professor)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
}

module.exports = ProfessorService