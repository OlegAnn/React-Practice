import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class Post extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header">
                    <h3 className="uk-card-title uk-margin-remove-bottom">{this.props.post.title}</h3>
                </div>
                <div className="uk-card-body">
                    <p>{this.props.post.body}</p>
                </div>
                <div className="uk-card-footer">
                    <Link to={`/url/${this.props.post.id}`} className="uk-button uk-button-text">Read more</Link>
                </div>
            </div>
        )
    }
}
