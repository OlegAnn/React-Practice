import React from 'react'
import Post from './Post'

export default function PostList(props) {
    const data = props.data
    return (
        <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {data.map((post) => {
                return <div key={post.id}><Post post={post}/></div>
            })}
        </div>
    )
}