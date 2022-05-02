const StudentModel = require('../../models/student/StudentModel')

let students = [
    {_id:0,name:'Bruno',course:'Sistemas',ira:7.8}
]
let _id = 1

class StudentServices {
    static list(){
        return students
    }
    static create(data){
        let student = new StudentModel(
            _id++,
            data.name,
            data.course,
            data.ira
        )
        students.push(student)
        return student
    }
    static update(_id, data){
        for(let e of students){
            if(e._id == _id){
                e.course = data.course
                e.name = data.name
                e.ira = data.ira
                return e;
            }
        }
        return null;
    }
    static delete(_id){
        for(let i = 0; i < students.length; i++){
            if(students[i]._id == _id){
                // remove 1 apartir do index i
                students.splice(i, 1)
                return true
            }
        }
        return false
    }
    static retrieve(_id){
        for(let i = 0; i < students.length; i++)
            if(students[i]._id == _id)
                return students[i]
        return {}
    }
}

module.exports = StudentServices