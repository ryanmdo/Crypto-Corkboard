import React, {Component} from 'react';


export default class Header extends Component{

    constructor(props){
        super(props)
        this.state={
            
        }
    }
    


    render(){
        return(
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="text-white navbar-brand" href="#">CRYPTO-CORKBOARD</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">

      <li className="nav-item active">
        <a className="text-white nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item">
        <a className="text-white nav-link" href="#">Disabled</a>
      </li>
      
    </ul>
  </div>
</nav>
        )
    }
}