import React from 'react'

export default function Album({album}) {
    return (
        <div className="uk-card uk-card-default uk-margin-medium-bottom">
            <div className="uk-card-header">
                <h3 className="uk-card-title uk-margin-remove-bottom">{album.title}</h3>
            </div>
            <div className="uk-card-body">
                <p>id: {album.id}</p>
            </div>
            <div className="uk-card-footer">
                <a href="#" className="uk-button uk-button-text">from user num {album.userId}</a>
            </div>
        </div>
    )
}