import React, {Component} from 'react'
import Photo from './Photo'

export default class PhotoList extends Component {

    render() {
        return (
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
                {this.props.photos.map(photo => {
                    return <div><Photo photo={photo}/></div>
                })}
            </div>
        )
    }
}