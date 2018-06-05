import React, {Component} from 'react'

export default class Photo extends Component {


    render() {
        const photoUrl = {
            backgroundImage: 'url(' + this.props.photo.url + ')'
        }
        return (
            <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header">
                    <h3 className="uk-card-title uk-margin-remove-bottom">Title: <hr/>{this.props.photo.title}</h3>
                </div>
                <div className="uk-card-body photo_body" style={photoUrl}>
                    <p>id: <a href={this.props.photo.url}>photo</a></p>
                    <p>thumbnailUrl: <a href={this.props.photo.thumbnailUrl}>photo</a></p>
                </div>
                <div className="uk-card-footer">
                    <a href="#" className="uk-button uk-button-text">album Id {this.props.photo.albumId}</a>
                    <hr/>
                    <a href="#" className="uk-button uk-button-text">Id {this.props.photo.id}</a>
                </div>
            </div>
        )
    }
}