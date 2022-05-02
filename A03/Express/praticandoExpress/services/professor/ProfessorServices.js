const ProfessorModel = require("../../models/professor/ProfessorModel")

let professors = [
    {_id:0,name:'Jefferson Cabral',university:'UFC',degree:'Sênior'}
]

let _id = 1

class ProfessorServices{
    static list(){
        return professors
    }
    static create(data){
        let professor = new ProfessorModel(
            _id++,
            data.name,
            data.university,
            data.degree
        )
        professors.push(professor)
        return professor
    }
    static update(_id, data){
        for(let e of professors){
            if(e._id == _id){
                e.name = data.name
                e.university = data.university
                e.degree = data.degree
                return e;
            }
        }
        return null
    }
    static delete(_id){
        for(let e = 0; e < professors.length; e++){
            if(professors[e]._id == _id){
                // remove 1 apartir do index i
                professors.splice(e, 1)
                return true
            }
        }
        return false
    }
    static retrieve(_id){
        for(let e = 0; e < professors.length; e++)
            if(professors[e]._id == _id)
                return professors[e]
        return {}
    }
}
module.exports = ProfessorServices