import React, {Component} from 'react';


import Sidebar from './Sidebar'

export default class Header extends Component{

    constructor(props){
        super(props)
        this.state={

        }
    }



    render(){
        return(


<div className='wrapper'> THIS IS PAGE

    <nav className='col-md-2'>
        <Sidebar/>
    </nav>
</div>


)
        
    }
}