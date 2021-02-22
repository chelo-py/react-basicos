import React, { Component } from 'react';

export default class TaskForm extends Component { // Extends para heredar propiedades de Component

    state = { // En state definimos el estado 
        title: '',
        description: ''
    }

    formSubmit = e => { // Evento del formulario.
        //console.log(this.state); // Por consola pintamos el state, que son title y description.
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault(); // Con esta línea de código evitamos que se refresque la página.
    }

    inputSubmit = e => { // Evento submit de los campos
        //console.log(e.target.name, e.target.value) // Pintamos por consola el nombre y el valor 
        this.setState({ // Con esta línea de código asignamos un nuevo valor en nuesto state
            [e.target.name]: e.target.value // el nombre y el valor
        })
    }

    render() { // Renderizamos
        return ( // Retornamos
            <form onSubmit={this.formSubmit}> {/* Al hacer submit en el formulario este ejecuta el formSubmit */}
                <input
                    type="text"
                    name="title" /* Asignarle un nombre es importante, para diferenciarlo de otro input */
                    placeholder="Type your Task"
                    onChange={this.inputSubmit}  // On change, mediante cambia que se ejecute la función inputSubmit
                    value={this.state.title} /> {/* Su valor será el que esté en state.title, el título */}
                <br />
                <br />
                <textarea
                    placeholder="Write a description"
                    name="description"
                    onChange={this.inputSubmit}
                    value={this.state.description}>
                </textarea>
                <br />
                <button type="submit"> Save Task</button>
            </form>
        )
    }

}
