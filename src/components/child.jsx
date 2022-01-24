import React from 'react';
// class2 
class Child extends React.Component{
    render(){
      return(
        <div>
      <button onClick={()=>this.props.get_data("running data send")}>Send Data</button>
          <h2>{this.props.name}</h2>
          <h3>{this.props.price}</h3>

        </div>
      )
    }
  }
  
  export default Child;
  