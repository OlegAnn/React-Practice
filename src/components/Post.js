import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default function Post({post}) {
    console.log(post)
    return (
        <div className="uk-card uk-card-default uk-margin-medium-bottom">
            <div className="uk-card-header">
                <h3 className="uk-card-title uk-margin-remove-bottom">{post.title}</h3>
            </div>
            <div className="uk-card-body">
                <p>{post.body}</p>
            </div>
            <div className="uk-card-footer">
                <Link to={`/url/${post.id}`} className="uk-button uk-button-text">Read more</Link>
            </div>
        </div>
    )
}
