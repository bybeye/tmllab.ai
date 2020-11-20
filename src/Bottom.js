import React from 'react';
import './Bottom.css';

import logo from './images/logo.png';
import group_logo from './images/bottom_logo.png'; 
import f7 from './images/f7.jpg'; 
import f8 from './images/f8.jpg'; 
import f9 from './images/f9.jpg'; 


class Bottom extends React.Component{

    state = {
	deskWidth: window.innerWidth,
    }

    componentDidMount() {
	this.handleSize()
	window.addEventListener('resize', this.handleSize);
    }
    
    componentWillUnmount() {
	window.removeEventListener('resize', this.handleSize);
    }

    handleSize = () => {
	var width = window.innerWidth

	if(width>=800){
	    width = 1200
	}

	this.setState({
	    deskWidth:width,
	});
    }
    
    render(){
	const { deskWidth } = this.state;
	
	return (
	    <div class="footer">
		<div class="footer-cont" style={{ width: deskWidth}}>
		    <div class="cont-fl fl">
			<p class="flogo"><img src={logo} width="120" alt=""/> <img src={group_logo} width="100" alt=""/></p>
			<p><h4> <i>Trustworthiness is a foundation</i></h4></p>
			<p class="link"></p>
		    </div>
		    <div class="cont-fm fl">
			<p class="f16"><h5>Connect</h5></p>
			<p class="f7s"><img src={f7} alt=""/>Address: 1 Cleveland St, Darlington, NSW 2008, Australia</p>
			<p class="f8s"><img src={f8} alt=""/>Tel: +61 2 8627 5966</p>
			<p class="f9s"><img src={f9} alt=""/>Email: tml.laboratory@gmail.com</p> 
		    </div>
		</div>
	    </div>	
	)
    }
}

export default Bottom
