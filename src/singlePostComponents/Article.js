import React, {Component} from 'react'

export default class Card extends Component{
    componentWillReceiveProps(nextProps) {
        this.setState({
            users: nextProps.users,
            posts: nextProps.posts
        });
    }
    render(){
        const Users = this.props.users;
        const Post = this.props.posts;
        return (
            <div>
                <h1 className="uk-h.nmeeading-bullet uk-margin-medium-bottom">
                    <span>{Post.title}</span>
                    <a className="uk-text-small" href="#">{Users.name}</a>
                </h1>
                <div className="uk-article uk-dropcap uk-margin-large-bottom">
                    {Post.body}
                </div>
            </div>
        )
    }
}