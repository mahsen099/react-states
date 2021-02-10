// import React, { useState } from 'react'

// function CounterUsingClassState() {
//   const [count, setcount]= useState(0);

//   function abebe(){
//     setcount((count)=>count+1)
//   }

//   return (
//     <div>
//      {/* <button onClick={abebe}>Count: {count}</button>  */}
//      {/* method2 */}
//      <button onClick={()=>{setcount((count)=>count+1)}}>Count: {count}</button>
//     </div>
//   )
// }
// export default CounterUsingClassState;

// import React, { Component } from "react";

// class CounterUsingClassState extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   incrementCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.incrementCount}>Count: {this.state.count}</button>
//       </div>
//     );
//   }
// }

// export default CounterUsingClassState;