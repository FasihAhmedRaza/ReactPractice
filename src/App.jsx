import React ,{Component}  from 'react';
// import { Component } from 'react/cjs/react.production.min';
import './App.css'

class Header extends Component {
     render(){
       return(
         <div className='header'>
           <h2>Header</h2>
         </div>
       )
     }
}
class Footer extends Component{
  render(){
    return(
      <div className='footer'>
        <h2> Footer</h2>
      </div>
    )
  }
}

class App extends React.Component{
  render(){
     
    return(
      <div>
        <Header />

        {/* // for  write inline css then we use this syntax
        // margin-left : incorrect in react 
        //we use 2nd letter capital marginLeft */}
        <h1 style={{backgroundColor:'blue', fontFamily:'sans-serif' ,fontSize:"20px"}}>Main Components</h1>
        

        
        <Footer />
      </div>
    )
  }
}


export default App;
