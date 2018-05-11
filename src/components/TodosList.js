import React from 'react'
import Todo from './Todo'

export default function TodosList(props) {
    const todos = props.todos
    console.log('----', todos)
    return (
        <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {todos.map(todo => {
                return <div><Todo todo={todo}/></div>
            })}
        </div>
    )
}