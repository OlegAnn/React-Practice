import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import PostList from './PostList'
import Pagination from '../components/Pagination'
import Post from './Post'

export default class Posts extends Component {
    state = {
        posts: [],
        limit: 6,
        page:1,
        length:100,
        namePage: ''
    };
    componentWillMount() {
        this.setState({
            namePage: "Posts"
        })

    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit${this.state.limit}&_page=${this.state.page}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data,
                    page : 1
                })
            })
    }
    changePagination(page){
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit${this.state.limit}&_page=${this.state.page}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data,
                    page
                })
            })
    }

    render(){
        return (
            <div>
                <Pagination change={this.changePagination.bind(this)} limit={this.state.limit} page={this.state.page} length={this.state.length}/>
                <main className="uk-main">
                    <div className="uk-section">
                        <div className="uk-container">
                            <h1>Page is: №{this.state.page}</h1>
                            <h2>{this.state.namePage}</h2>
                            <PostList data={this.state.posts}/>
                            {/*<Post page={this.state.page}/>*/}
                            <h1>Page is: №{this.state.page}</h1>
                            <h2>{this.state.namePage}</h2>
                            <Pagination change={this.changePagination.bind(this)} limit={this.state.limit} page={this.state.page} length={this.state.length}/>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
