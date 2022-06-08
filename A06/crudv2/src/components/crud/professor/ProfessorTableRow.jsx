import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const ProfessorTableRow = (props) => {
    const { _id, name, university, degree } = props.professor

    function deleteProfessor() {
        //Usando o JsonServer
        //axios.delete(`http://localhost:3001/professors/${id}`)

        //Usando o express com mongo
        if (window.confirm(`Deseja Exluir o Elemento de ID: ${_id}?`)) {
            axios.delete(`http://localhost:3002/professors/crud/delete/${_id}`)
                .then(res => props.deleteProfessorById(_id))
                .catch(error => console.log(error))
        }
    }

    return (
        <tr>
            <td>
                {_id}
            </td>
            <td>
                {name}
            </td>
            <td>
                {university}
            </td>
            <td>
                {degree}
            </td>
            <td style={{ textAlign: "center" }}>
                <Link to={`/editProfessor/${_id}`} className="btn btn-primary">Editar</Link>
            </td>
            <td style={{ textAlign: "center" }}>
                <button className="btn btn-danger" onClick={() => deleteProfessor()}>Apagar</button>
            </td>
        </tr>
    )
}

export default ProfessorTableRow