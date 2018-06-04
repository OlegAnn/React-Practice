import React, {Component} from 'react'

export default class User extends Component {

    render() {
        console.log('USERS', this.props.user.username)
        return (
            <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header">
                    <h3 className="uk-card-title uk-margin-remove-bottom">User Id: {this.props.user.id} <br/> Username: {this.props.user.username} </h3>
                </div>
                <div className="uk-card-body">
                    <p>User street: {this.props.user.address.street}</p>
                    <p>User city: {this.props.user.address.city}</p>
                    <p>User website: {this.props.user.website}</p>
                    <p>User email: {this.props.user.email}</p>
                </div>
                <div className="uk-card-footer">
                    <a href={this.props.user.name} className="uk-button uk-button-text">from user name: {this.props.user.name}</a>
                </div>
            </div>
        )
    }
}