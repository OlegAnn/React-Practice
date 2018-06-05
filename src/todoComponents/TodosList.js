import React, {Component} from 'react'
import Todo from './Todo'

export default class TodosList extends Component {
    render() {
        return (
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
                {this.props.todos.map(todo => {
                    return <div><Todo todo={todo}/></div>
                })}
            </div>
        )
    }
}