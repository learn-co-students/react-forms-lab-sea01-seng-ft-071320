// import React from "react";

// class TwitterMessage extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       messsage: ''
//     };
//   }

// handleChange = event => {
//  this.setState({
//    message: event.target.value
//  })
// }


  

//   render() {
//     let charNumber = this.props.maxChars - this.state.message.length;
//     // let charNumber = this.state.message;
//     // console.log(charNumber.)
//     return (
//       <div>
//         <strong>Your message:</strong>
//         <input  type="text" onChange={this.handleChange} value={this.state.message} />
//         {charNumber}
//       </div>
//     );
//   }
  
// }

// export default TwitterMessage;

import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;