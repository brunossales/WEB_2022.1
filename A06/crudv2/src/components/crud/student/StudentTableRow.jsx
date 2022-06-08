import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import FirebaseService from "../../../services/FirebaseStudentServices";


const StudentTableRow = (props) => {
    const { _id, name, course, ira } = props.student

    function deleteStudent() {
        if (window.confirm(`Deseja Exluir o Elemento de ID: ${_id}?`)) {
            //use axios, express com mongo

            // axios.delete(`http://localhost:3002/students/crud/delete/${_id}`)
            //     .then(res => props.deleteStudentById(_id))
            //     .catch(error => console.log(error))

            FirebaseService.delete(
                props.firestore,
                (ok)=>{if(ok) console.log('Apagado')},
                _id
            )
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
                {course}
            </td>
            <td>
                {ira}
            </td>
            <td style={{ textAlign: "center" }}>
                <Link to={`/editStudent/${_id}`} className="btn btn-primary">Editar</Link>
            </td>
            <td style={{ textAlign: "center" }}>
                <button className="btn btn-danger" onClick={() => deleteStudent()}>Apagar</button>
            </td>
        </tr>
    )
}

export default StudentTableRow