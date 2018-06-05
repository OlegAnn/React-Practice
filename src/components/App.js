import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import Navbar from './Navbar'
import Posts from '../postComponents/Posts'
import Albums from '../albumComponents/Albums'
import Comments from '../commentComponents/Comments'
import Users from '../userComponents/Users'
import Todos from '../todoComponents/Todos'
import Photos from '../photoComponents/Photos'
import Pagination from './Pagination'
import PostSingle from './PostSingle'



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="app">
              <Navbar/>
              <Route exact path="/" component={Posts} />
              <Route path="/posts" component={Posts} />
              <Route path="/users" component={Users} />
              <Route path="/photos" component={Photos} />
              <Route path="/albums" component={Albums} />
              <Route path="/todos" component={Todos} />
              <Route path="/comments" component={Comments} />
              <Route path="/url/:id" component={PostSingle} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
