import React, { Component } from 'react'

 class Welcome extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedIn : true
      }
    }

  render() {

    return this.state.isloggedIn && <div>Welcome User</div>
    //Using ternary Rendering

    // return(
    //     this.state.isloggedIn ? <div>Welcome User</div> : <div>Welcome Guest</div>
    // )



    //Using element rendereing 
            //   let message
            //   if(this.state.isloggedIn){
            //     message = <div>Welcome User</div>
            //   } else{
            //     <div>Welcome Guest</div>
            //   }
            //   return <div>{message}</div>

    // Using if else satement 
    // if(this.state.isloggedIn){
    //   return  <div className='my-3'>Welcome User</div> 
    // }else{
    //   return  <div className='my-3'>Welcome Guest</div> 
    //      }


    // return (
    //     <div>
    //          <div className='my-3'>Welcome User</div>
    //          <div className='my-3'>Welcome Guest</div>


    //     </div>
    //     )
  }
}

export default Welcome