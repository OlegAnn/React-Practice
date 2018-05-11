import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default function BreadCrumps(){
    return(
        <ul className="uk-breadcrumb uk-margin-medium-bottom">
            <li><a href="#">Item</a></li>
            <li><Link to="/posts">Post</Link></li>
            <li><span>Active</span></li>
        </ul>
    )
}