import React, {Component} from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header">
                    <h3 className="uk-card-title uk-margin-remove-bottom">{this.props.comment.name}</h3>
                </div>
                <div className="uk-card-body comments_body">
                    <p>{this.props.comment.body}</p>
                    <p>{this.props.comment.email}</p>
                </div>
                <div className="uk-card-footer">
                    <a href="#" className="uk-button uk-button-text">from user ID: {this.props.comment.postId}</a>
                </div>
            </div>
        )
    }
}