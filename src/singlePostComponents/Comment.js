import React, {Component} from 'react'

export default class Comment extends Component{
    componentWillReceiveProps(nextProps) {
      function setFinalComment(){
        if(Object.keys(nextProps.newComment).length === 0
        ){
          return nextProps.comment
        }else{
          return nextProps.comment.push(nextProps.newComment)
        }
      }
      this.setState({
            comment: setFinalComment()
        })
    }
    mapper = (item) => {
      return (<div className="uk-comments">
          <article className="uk-comment">
            <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
              <div className="uk-width-expand">
                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">{item.name}</a></h4>
                <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                  <li><a href="#">{item.email}</a></li>
                </ul>
              </div>
            </header>
            <div className="uk-comment-body">
              {item.body}
            </div>
          </article>
          <hr/>
        </div>
      )
    };
    render(){
      return(
            <div>
                <h3 className="uk-margin-remove-top">Comments:</h3>
                {this.props.comment.map(this.mapper)}
            </div>
        )
    }
}