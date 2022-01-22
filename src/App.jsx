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
      value : ""

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
    name: this.state.value
  })
}
handleChange(e){
  // console.log(e.target.name);
  // console.log(e.target.value);
  // console.log(e.target.type);
  // console.log(e.target.placeholder);

  this.setState({
    [e.target.name] : [e.target.value] // easy method for change data 
  })

}

get_props = (props) => {
 console.log(props)
}




  render() {
    console.log("props =>" ,this.props)
    return (
      <div>
        <Header  get_props ={this.get_props} page="this is page"  name="Fasih Ahmed" email="thisfasih@gmail.com"/>

         <h2>My name is {this.state.name}</h2> 
         <h2>My email is {this.state.email}</h2>
         <input name="name" onChange={(e) => this.handleChange(e)} type="text" placeholder='ENTER YOUR NAME'/>
         <input  name="email" onChange={(e) => this.handleChange(e)} type="text" placeholder='ENTER YOUR EMAIL'/>
         {/* <input name="name" onChange={(e) => this.setState({name:e.target.value})} type="text" placeholder='ENTER YOUR NAME'/>
         <input  onChange={(e) => this.setState({email:e.target.value})} type="text" placeholder='ENTER YOUR EMAIL'/> */}
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
