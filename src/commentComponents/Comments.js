import React from 'react'
import CommentsList from './CommentsList'
import comments from '../data/comments'

export default function Comments() {
    return (
        <div>
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <h2>Comments</h2>
                        <CommentsList comments={comments}/>
                    </div>
                </div>
            </main>
        </div>
    )
}