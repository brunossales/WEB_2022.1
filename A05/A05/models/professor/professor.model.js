var mongoose = require('mongoose')

var ProfessorSchema = mongoose.Schema(
    {
        name : {type: String, require: true, max:100, uppercase:true},
        university : {type: String, require: true, max:100, uppercase:true},
        degree : {type: String, require: true, max:100, uppercase:true},
    }
)

var ProfessorModel = mongoose.model('professors', ProfessorSchema)

module.exports = ProfessorModel