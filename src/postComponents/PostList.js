import React, {Component} from 'react'
import Post from './Post'

export default class PostList extends Component{
    render(){
        const data = this.props.data;
        return (
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
                {data.map((post) => {
                    return <div><Post post={post}/></div>
                })}
            </div>
        )
    }
}