import React from 'react'
import User from './User'

export default function userList(props) {
    const users = props.users
    return (
        <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {users.map(user => {
                return <div><User user={user}/></div>
            })}
        </div>
    )
}