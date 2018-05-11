import React from 'react'

export default function Todo({todo}) {
    return (
        <div className="uk-card uk-card-default uk-margin-medium-bottom">
            <div className="uk-card-header">
                <h3 className="uk-card-title uk-margin-remove-bottom">{todo.title}</h3>
            </div>
            <div className="uk-card-body">
                <p>Task completed: {todo.completed ? 'yes' : 'no'}</p>
            </div>
            <div className="uk-card-footer">
                <a href="#" className="uk-button uk-button-text">from userId {todo.userId}</a>
                <hr/>
                <a href="#" className="uk-button uk-button-text">from user id {todo.id}</a>
            </div>
        </div>
    )
}