import React from 'react'

export default function Album({photo}) {
    return (
        <div className="uk-card uk-card-default uk-margin-medium-bottom">
            <div className="uk-card-header">
                <h3 className="uk-card-title uk-margin-remove-bottom">{photo.title}</h3>
            </div>
            <div className="uk-card-body">
                <p>id: <a href={photo.url}>photo</a></p>
                <p>thumbnailUrl: <a href={photo.thumbnailUrl}>photo</a></p>
            </div>
            <div className="uk-card-footer">
                <a href="#" className="uk-button uk-button-text">album Id {photo.albumId}</a>
                <hr/>
                <a href="#" className="uk-button uk-button-text">Id {photo.id}</a>
            </div>
        </div>
    )
}