import React, {Component} from 'react'
import UserList from './UserList'
import users from '../data/users'

export default class Users extends Component {
    state = {
        namePage: ''
    }

    componentDidMount() {
        this.setState({
            namePage: this.props.match.path.slice(1)[0].toUpperCase() + this.props.match.path.slice(2)
        })
    }

    render() {
        console.log('this', this.props.match.path)
        return (
            <div>
                <main className="uk-main">
                    <div className="uk-section">
                        <div className="uk-container">
                            <h2>{this.state.namePage}</h2>
                            <UserList users={users}/>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}