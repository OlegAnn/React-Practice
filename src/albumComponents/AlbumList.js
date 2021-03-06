import React, {Component} from 'react'
import Album from './Album'

export default class AlbumList extends Component {

    render() {
        return (
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
                {this.props.albums.map(album => {
                    return <div><Album album={album}/></div>
                })}
            </div>
        )
    }
}