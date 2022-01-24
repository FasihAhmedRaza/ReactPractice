import React, { Component } from 'react';
import { Header, Logo } from './components/Header.jsx';
import footer from './components/Footer.jsx';
// import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Footer from './components/Footer.jsx';
import BasicTextFields from './components/TextField';
import AppRouter from './config/router.jsx';
import './components/child.jsx'
import Child from './components/child.jsx';
// import AppRouter from './config/router.jsx';
import Home from './container/Home';
import About from './container/About';




class App extends Component{
  render(){
    return(
      <div>
      <h1>App Page</h1>
      <h2>sssss</h2>
      <Home />
       
        <button>button</button>
        </div>
    )

  }
}

export default App;



// // -----------------------------------------------------------
// class App extends Component{
//   constructor(){
//     super()
//  this.state = {
//    todos : ["Fasih" , "Ahmed" , "Raza" ,"Ali"],
//    value : ''
   
//  }
//   }
 
//   add_todo = () => {
//    this.state.todos.push(this.state.value)
//    this.setState({
//      todos : this.state.todos,
//      value : ''
//    })
//   }
//   delete = (index) => {
//     this.state.todos.splice(index,1)
//     this.setState({
//       todos : this.state.todos
//     })
//   }
//   Edit = (index)  => {
//     var update_val = prompt("enter your value");
//     this.state.todos[index] = update_val
//     this.setState({
//       todos : this.state.todos
//     })
    
//   }

//   render(){
//     let {todos, value} =this.state; // we use  this trick because of we call state every time again and again
//     return(
//       <div>
//         <input value={value}  onChange={(e) => this.setState({value: e.target.value})} type="text" placeholder='Enter Value'  />
//         <button onClick={this.add_todo} >Add Item</button>
//       <ul>
//         {this.state.todos.map((value,index) =>{
//           return  <li key={index} >  {value}
//           <button onClick={this.Edit}>Edit</button>
//           <button onClick={this.delete}>Delete</button>  </li>
//         })}

//       </ul>
//       </div>
//     )
    
//   }
// }




// ------------------------------------------------------------------------------------------------------------------
// // class 2
// class App extends React.Component{

//   get_data(data){
// console.log(data);
//   }
//   render(){
//     return(
//       <div>
//         <h1>Parent Component</h1>
//       <Child  get_data={this.get_data} name="car" price="100,000" />

//       {/* <Child  name="watch" price="300"/>

//       <Child name="house" price="1,00,199" />

//       <Child  name="bike" price="50,000"/> */}
//       </div>
//     )
//   }
// }


// export default App;


// ---------------------------------------------------------------


// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       name : "Fasih Ahmed",
//       email : "thisfasih@gmail.com",
//       PhoneNumber:"03121234454",
//       value : ""

//     }
//   }
// //   set_name(){
// // console.log("Runing .......");
// //   }

// get_name = () => {
//  console.log(this.state.name)
// }
// set_name =() => {
//   this.setState({
//     name: this.state.value
//   })
// }
// handleChange(e){
//   // console.log(e.target.name);
//   // console.log(e.target.value);
//   // console.log(e.target.type);
//   // console.log(e.target.placeholder);

//   this.setState({
//     [e.target.name] : [e.target.value] // easy method for change data 
//   })

// }

// get_props = (props) => {
//  console.log(props)
// }




//   render() {
//     console.log("props =>" ,this.props)
//     return (
//       <div>
//         <Header  get_props ={this.get_props} page="this is page"  name="Fasih Ahmed" email="thisfasih@gmail.com"/>

//          <h2>My name is {this.state.name}</h2> 
//          <h2>My email is {this.state.email}</h2>
//          <input name="name" onChange={(e) => this.handleChange(e)} type="text" placeholder='ENTER YOUR NAME'/>
//          <input  name="email" onChange={(e) => this.handleChange(e)} type="text" placeholder='ENTER YOUR EMAIL'/>
//          {/* <input name="name" onChange={(e) => this.setState({name:e.target.value})} type="text" placeholder='ENTER YOUR NAME'/>
//          <input  onChange={(e) => this.setState({email:e.target.value})} type="text" placeholder='ENTER YOUR EMAIL'/> */}
//          <button onClick={this.set_name}>Set Name</button>
//           {/* // 2nd method for call is  { () => this.set_name()} */}
//           <button onClick={this.get_name}>get Name</button>
        
//         <BasicTextFields /> 
//         <Footer />

   

//       </div>
//     )
//   }
// }


// export default App;
