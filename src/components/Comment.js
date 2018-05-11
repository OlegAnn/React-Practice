import React from 'react'

export default function Comment({comment}) {
    return (
        <div className="uk-card uk-card-default uk-margin-medium-bottom">
            <div className="uk-card-header">
                <h3 className="uk-card-title uk-margin-remove-bottom">{comment.name}</h3>
            </div>
            <div className="uk-card-body">
                <p>{comment.body}</p>
                <p>{comment.email}</p>
            </div>
            <div className="uk-card-footer">
                <a href="#" className="uk-button uk-button-text">from user name: {comment.postId}</a>
            </div>
        </div>
    )
}