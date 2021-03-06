import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
//import { students } from './data.js'

function EditStudent(props) {

    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [ira, setIRA] = useState(0)
    const params = useParams()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        const updatedStudent = { name,course,ira }

        //Usando o axios com o json server
       //axios.put('http://localhost:3001/students/' + params.id, updatedStudent)

        //Agora usando o express com mongo
        axios.put('http://localhost:3002/students/crud/update/' + params.id, updatedStudent)
            .then(
                res => {
                    //console.log(res.data)
                    //props.history.push('/listStudent');
                    //console.log(props)
                    navigate("/listStudent")
                }
            )
            .catch(error => console.log(error))
    }

    //https://pt-br.reactjs.org/docs/hooks-effect.html
    useEffect(
        () => {

            axios.get('http://localhost:3002/students/crud/retrieve/' + params.id)
                .then(
                    (res) => {
                        setName(res.data.name)
                        setCourse(res.data.course)
                        setIRA(res.data.ira)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )

        }
        ,
        [params.id]
    )

    return (
        <>
            <main>
                <h2>
                    Editar Estudante
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text"
                            className="form-control"
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text"
                            className="form-control"
                            value={course ?? ""}
                            name="course"
                            onChange={(event) => { setCourse(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text"
                            className="form-control"
                            value={ira ?? 0}
                            name="ira"
                            onChange={(event) => { setIRA(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 , paddingBottom:20}}>
                        <input type="submit" value="Atualizar Estudante" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/" class="btn btn-outline-success">Home</Link>
            </nav>
        </>
    );
}

export default EditStudent