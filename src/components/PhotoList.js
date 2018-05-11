import React from 'react'
import Photo from './Photo'

export default function AlbumList(props) {
    const photos = props.photos
    return (
        <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {photos.map(photo => {
                return <div><Photo photo={photo}/></div>
            })}
        </div>
    )
}