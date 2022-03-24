import React, { Component } from "react";

//Inserindo as informações lá no meu App.JS
class Informacoes extends Component{
    render (){
        return (
            <div>
                <h4>Nome: {this.props.nome}</h4>
                <h4>Curso: {this.props.curso}</h4>
                <h4>Turno: {this.props.turno}</h4>
                <h4>Universidade: {this.props.universidade}</h4>
            </div>
        )
    }
}

export default Informacoes