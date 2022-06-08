import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const CreateProfessor = () => {

    const [name, setName] = useState("")
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const newProfessor = {name, university, degree}

        //JsonServer
        //axios.post("http://localhost:3001/professors", newProfessor)

        //Express com mongo
        axios.post("http://localhost:3002/professors/crud/create", newProfessor)
        .then(
            (response) => {
                console.log(response)
                alert(`Professor ${name} criado com sucesso, maninho!!`)
                navigate('/listProfessor')
            }
        )
        .catch(error=>console.log(error))
    }

    return (
        <>
            <main>
                <h2>
                    Criar Professor
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
                        <label>Titulação: </label>
                        <input type="text"
                            className="form-control"
                            value={degree ?? ""}
                            name="degree"
                            onChange={(event) => { setDegree(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20, paddingBottom:20 }}>
                        <input type="submit" value="Criar Professor" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/" class="btn btn-outline-success">Home</Link>
            </nav>
        </>
    );
}

export default CreateProfessor