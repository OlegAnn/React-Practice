import React from 'react'
import PhotoList from './PhotoList'
import photos from '../data/photos'

export default function Photos() {
    return (
        <div>
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <h2>Photos</h2>
                        <PhotoList photos={photos}/>
                    </div>
                </div>
            </main>
        </div>
    )
}