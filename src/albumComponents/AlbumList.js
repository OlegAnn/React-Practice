import React from 'react'
import Album from './Album'

export default function AlbumList(props) {
    const albums = props.albums
    return (
        <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {albums.map(album => {
                return <div><Album album={album}/></div>
            })}
        </div>
    )
}