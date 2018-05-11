import React from 'react'
import UserList from './UserList'
import users from '../data/users'

export default function Users() {
    return (
        <div>
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <h2>Users</h2>
                        <UserList users={users}/>
                    </div>
                </div>
            </main>
        </div>
    )
}