import React, { Component } from 'react'

export default class Post extends Component {

    state = { // Declaramos un state
        posts: []
    }

    async componentDidMount() { // Definimos el método didMount, que se ejecuta al montar la página
        const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // En una constante guardamos nuestro método fetch
        const data = await res.json(); // En una constante guardamos la constante anterior pasada con el método json, para pasarla a dicha extensión
        this.setState({ posts: data }) // Insertamos en el estado con setState, dentro del arreglo posts los datos de la constante data
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => { // De este state llamamos el arreglo posts con el método map creamos un nuevo arreglo llamado post
                        return <div key={post.id}> {/* Retornamos un div, le asignamos un key con el id del post para evitar que se repita */}
                            <h1>{post.title}</h1> {/* Como h1 le asignamos el título del post */}
                            <p>{post.body}</p> {/* Como p le asignamos el body del post */}
                        </div>
                    })
                }
            </div>
        )
    }
}
