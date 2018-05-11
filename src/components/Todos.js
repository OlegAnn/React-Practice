import React from 'react'
import TodosList from './TodosList'
import todos from '../data/todos'

export default function Todos() {
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