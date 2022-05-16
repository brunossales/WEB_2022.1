var mongoose = require('mongoose')

//criando um esquema
//Que vai ser usado para criar a collection la no banco

var StudentSchema = mongoose.Schema(
    {
        name: {type: String, require: true, max:100, uppercase:true},
        course: { type: String, require:true, max:100, uppercase:true}, 
        ira: {type: Number, require:true, maxlength:3},
    }
)

//criando o modelo no qual vai incluir as instancias, os documentos
var StudentModel = mongoose.model('students', StudentSchema)


//retorna o modelo usado pelo serviço
module.exports = StudentModel