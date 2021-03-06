import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProfessor(props) {

    const [name, setName] = useState("")
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const params = useParams()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const updatedProfessor = {name, university, degree}

        //Json Server
        // axios.put(`http://localhost:3001/professors/${params.id}`, updatedProfessor)

        //Express
        axios.put(`http://localhost:3002/crud/professors/updateP/${params.id}`, updatedProfessor)
        .then(
            (response)=>{
                // console.log("Beleza")
                navigate('/listProfessor')
            }
        )
        .catch(error=>console.log(error))
    }
    useEffect(
        ()=>{
            //Json Server
            //axios.get(`http://localhost:3001/professors/${params.id}`)

            //Express
            axios.get(`http://localhost:3002/crud/professors/retrieveP/${params.id}`)
            .then(
                (response) => {
                    setName(response.data.name)
                    setUniversity(response.data.university)
                    setDegree(response.data.degree)
                }
            )
            .catch(error=>(console.log(error)))
        },
        [params.id]
    )

    return (
        <>
            <main>
                <h2>
                    Editar Professor
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
                        <label>Universidade: </label>
                        <input type="text"
                            className="form-control"
                            value={university ?? ""}
                            name="university"
                            onChange={(event) => { setUniversity(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Titula????o: </label>
                        <input type="text"
                            className="form-control"
                            value={degree ?? ""}
                            name="degree"
                            onChange={(event) => { setDegree(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Atualizar Professor" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default EditProfessor