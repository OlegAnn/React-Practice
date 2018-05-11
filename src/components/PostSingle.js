import React, {Component} from 'react'
import Form from '../singlePostComponents/Form'
import BreadCrumps from '../singlePostComponents/Breadcrumps'
import Card from '../singlePostComponents/Article'
import SingleComment from '../singlePostComponents/Comment'


export default class PostSingle extends Component{
    state = {
        users: [],
        posts: [],
        comments: [],
        newComment: {}
    };
    addNewComment = this.addNewComment.bind(this);
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}?_expand=user&_embed=comments`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data,
                    users: data.user,
                    comments: data.comments
                });
            });
    }
    addNewComment(name, email, body){
        this.setState({
            newComment: {
                name,
                email,
                body
            }
        })
    }
    render(){
        console.log(this.state);
        return (
            <div>
                <main className="uk-main">
                    <div className="uk-section">
                        <div className="uk-container">
                            <BreadCrumps/>
                            <Card users={this.state.users} posts={this.state.posts} />
                            <hr/>
                            <SingleComment newComment={this.state.newComment} comment={this.state.comments}/>
                            <Form getComment={this.addNewComment}/>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}