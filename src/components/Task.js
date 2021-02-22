import React, { Component } from 'react';
import './task.css'

import propTypes from 'prop-types';

class Task extends Component {

    StyleCompleted() { //Creamos un método que aplicar estas propiedades
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black', // Condicional, si existe el task.done debe pintar en grey, sino en negro
            textDecoration: this.props.task.done ? 'line-through' : 'none' // Condional, si existe el task.done debe pintar con una línea intermedia, sino no.
        }
    }

    render() {
        const { task } = this.props; // Definimos una constante task, que destructuramos de this.props

        return <div style={this.StyleCompleted()}>
            {task.title} -
            {task.description} -
            {task.done} -
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                x
            </button>
        </div>
    }
}

Task.propTypes = {
    task: propTypes.object.isRequired
}

const btnDelete = {
    fontSize: '2rem',
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    padding: '0.1rem 0.5rem',
    borderRadius: '50%',
}

export default Task;