import React from 'react'

export default function User({user}) {
    return (
        <div className="uk-card uk-card-default uk-margin-medium-bottom">
            <div className="uk-card-header">
                <h3 className="uk-card-title uk-margin-remove-bottom">User Id: {user.id}</h3>
            </div>
            <div className="uk-card-body">
                <p>User street: {user.address.street}</p>
                <p>User city: {user.address.city}</p>
                <p>User website: {user.website}</p>
                <p>User email: {user.email}</p>
            </div>
            <div className="uk-card-footer">
                <a href={user.name} className="uk-button uk-button-text">from user name: {user.name}</a>
            </div>
        </div>
    )
}