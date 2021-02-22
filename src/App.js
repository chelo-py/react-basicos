import './App.css';
import React, { Component } from 'react';
import tasks from './sample/tasks.json';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

// Components
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import Post from './components/Post';

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks })
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({ task: newTasks })
  }

  render() {
    return <div>
      <Router>

        <Link to="/">Home</Link>
        <br />
        <Link to="/post">Post</Link>
        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.addTask} />
            <Tasks
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              checkDone={this.checkDone} />
          </div>
        }} />
        <Route path="/post" component={Post} />
      </Router>
    </div>
  }
}

export default App;
