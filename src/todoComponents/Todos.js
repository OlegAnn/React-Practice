import React, {Component} from 'react'
import TodosList from './TodosList'
import todos from '../data/todos'

export default class Todos extends Component{
    render() {
        return (
            <div>
                <main className="uk-main">
                    <div className="uk-section">
                        <div className="uk-container">
                            <h2>Todos</h2>
                            <TodosList todos={todos}/>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}