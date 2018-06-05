import React, {Component} from 'react'

export default class Todo extends Component{
    render(){
        return (
            <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header">
                    <h3 className="uk-card-title uk-margin-remove-bottom">{this.props.todo.title}</h3>
                </div>
                <div className={"uk-card-body " + (this.props.todo.completed ? 'yes' : 'no')}>
                    <p>Task completed: {this.props.todo.completed ? 'yes' : 'no'}</p>
                </div>
                <div className="uk-card-footer">
                    <a href="#" className="uk-button uk-button-text">from user Id: {this.props.todo.userId}</a>
                    <hr/>
                    <a href="#" className="uk-button uk-button-text">from task Id: {this.props.todo.id}</a>
                </div>
            </div>
        )
    }
}