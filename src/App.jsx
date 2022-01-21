import React, { Component } from 'react';
import { Header, Logo } from './components/Header.jsx';
import footer from './components/Footer.jsx';
// import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Footer from './components/Footer.jsx';
import BasicTextFields from './components/TextField';





class App extends Component {
  constructor(){
    super()
    this.state = {
      name : "Fasih Ahmed",
      email : "thisfasih@gmail.com",
      PhoneNumber:"03121234454",

    }
  }
//   set_name(){
// console.log("Runing .......");
//   }

get_name = () => {
 console.log(this.state.name)
}
set_name =() => {
  this.setState({
    name: "Fahad Ali"
  })
}

  render() {

    return (
      <div>
        <Header />

         <h2>My name is {this.state.name}</h2> 
         <h2>My email is {this.state.email}</h2>
         <input type="text" placeholder='ENTER VALUE'/>
         <button onClick={this.set_name}>Set Name</button>
          {/* // 2nd method for call is  { () => this.set_name()} */}
          <button onClick={this.get_name}>get Name</button>
        
        <BasicTextFields /> 
        <Footer />

   

      </div>
    )
  }
}


export default App;
