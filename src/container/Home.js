import React from 'react';
import { Link} from "react-router-dom";



class Home extends React.Component{
    render(){
      return(
        <div>
        <h1>Home Page</h1>
        <link to="/about">Go to about </link>
        </div>
      )
    }
  }
  
  export default Home;