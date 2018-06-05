import React from 'react'
import Comment from './Comment'

export default function CommentsList(props) {
    const comments = props.comments
    return (
        <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {comments.map(comment => {
                return <div><Comment comment={comment}/></div>
            })}
        </div>
    )
}