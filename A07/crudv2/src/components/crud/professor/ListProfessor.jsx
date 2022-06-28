import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ProfessorTableRow from "./ProfessorTableRow";


//Firebase
import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseProfessorService from "../../../services/professor/FirebaseProfessorService";
import RestrictPage from "../../../utils/RestrictPage";

const ListProfessorPage = ({ setShowToast, setToast }) => 
<FirebaseContext.Consumer>
{
    (firebase) => {
        return (
            <RestrictPage isLogged={firebase.getUser() != null}>
                <ListProfessor
                    firebase={firebase}
                    setShowToast={setShowToast}
                    setToast={setToast} />
            </RestrictPage>
        )
    }
}
</FirebaseContext.Consumer>

function ListProfessor(props) {

    const [professors, setProfessors] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(
        () => {
            // Firebase
            setLoading(true)
            FirebaseProfessorService.list(
                props.firebase.getFirestoreDb(),
                (professors) => {
                    setLoading(false)
                    setProfessors(professors)
                }
            )
        }
        ,
        [props.firebase]
    )

    function deleteProfessorById(_id){
        let professorTemp = professors
        for(let e = 0; e < professorTemp.length; e++)
            if(professorTemp[e]._id === _id)
                professorTemp.splice(e, 1)

        setProfessors([...professorTemp])
    }

    function renderTable() {
        if (loading) {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 100
                }}>
                    <div className="spinner-border"
                        style={{ width: '3rem', height: '3rem' }}
                        role="status" />
                    Carregando...
                </div>
            )
        }
        return (
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Universidade</th>
                    <th>Titulação</th>
                    <th colSpan={2} style={{ textAlign: "center" }}>Ações</th>
                </tr>
            </thead>
            <tbody>
                {generateTable()}
            </tbody>
        </table>
        )
    }
    
    function generateTable() {

        if (!professors) return
        return professors.map(
            (professor, i) => {
                return <ProfessorTableRow
                            professor={professor}
                            key={i}
                            deleteProfessorById={deleteProfessorById}
                            firestore={props.firebase.getFirestoreDb()}
                            setShowToast={props.setShowToast}
                            setToast={props.setToast}
                            />
            }
        )
    }


    return (
        <>
            <main>
                <h2>
                    Listar Professores
                </h2>
                {renderTable()}
            </main>
            
            {/* deixando a interface mais no meu estilo */}
            <nav>
                <Link to="/" class="btn btn-outline-success">Home</Link>
            </nav>
        </>
    );
}

export default ListProfessorPage