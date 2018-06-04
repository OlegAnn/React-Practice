import React, {Component} from 'react'
import User from './User'

export default class UserList extends Component {

    render()  {
        return (
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
                { this.props.users.map((user, key) => {
                    return <div><User key={key} user={user}/></div>
                })}
            </div>
        )
    }

}