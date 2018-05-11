import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Navbar from './Navbar'
import Posts from './Posts'
import Albums from './Albums'
import Comments from './Comments'
import Users from './Users'
import Todos from './Todos'
import Photos from './Photos'
import Pagination from './Pagination'
import PostSingle from './PostSingle'



class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
