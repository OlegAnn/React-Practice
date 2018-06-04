import React, {Component} from 'react'

export default class Album extends Component{

    render() {
        return (
            <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header">
                    <h3 className="uk-card-title uk-margin-remove-bottom">{this.props.album.title}</h3>
                </div>
                <div className="uk-card-body">
                    <p>id: {this.props.album.id}</p>
                </div>
                <div className="uk-card-footer">
                    <a href="#" className="uk-button uk-button-text">from user num {this.props.album.userId}</a>
                </div>
            </div>
        )
    }
}