import React, { Component } from 'react';
import App from '../App';
import { BrowserRouter as Router,  Route} from "react-router-dom";
import Home from '../container/Home';
import About from "../container/About";

class AppRouter extends Component{
    render(){
        return(
            <div>
            <Router>
                <Route exact path="/" Component={Home}/>
                <Route exact path="/about" Component={About} />
            </Router>
            </div>
        )
    }
}

export default AppRouter;