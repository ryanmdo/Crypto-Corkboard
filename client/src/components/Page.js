import React, {Component} from 'react';


import Sidebar from './Sidebar'
import CurrentPrices from './CurrentPrices'



export default class Header extends Component{

    constructor(props){
        super(props)
        this.state={

        }
    }



    render(){
        return(


<div className='wrapper'> THIS IS MAIN PAGE




    <CurrentPrices/>



</div>


)
        
    }
}