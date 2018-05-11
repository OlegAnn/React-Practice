import React from 'react'
import AlbumList from './AlbumList'
import albums from '../data/albums'

export default function Albums() {
    return (
        <div>
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <h2>Albums</h2>
                        <AlbumList albums={albums}/>
                    </div>
                </div>
            </main>
        </div>
    )
}