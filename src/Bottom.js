import React from 'react';
import './Bottom.css';

import logo from './images/logo.png';
import group_logo from './images/group_logo.png'; 
import f7 from './images/f7.jpg'; 
import f8 from './images/f8.jpg'; 
import f9 from './images/f9.jpg'; 


class Bottom extends React.Component{

    state = {
	deskWidth: window.innerWidth,
    }

    componentDidMount() {
	this.handleSize();
	window.addEventListener('resize', this.handleSize);
    }
    
    componentWillUnmount() {
	window.removeEventListener('resize', this.handleSize);
    }

    handleSize = () => {
	var width = window.innerWidth;

	if(width>=800){
	    width = 1200;
	}

	this.setState({
	    deskWidth:width,
	});
    }
    
    render(){
	const { deskWidth } = this.state;
	
	return (
	    <div className="footer">
		<div className="footer-cont" style={{ width: deskWidth}}>
		    <div className="cont-fl fl">
			<p className="flogo"><img src={logo} width="120" alt=""/> <img src={group_logo} width="85" alt=""/></p>
			<h3> <i>Trustworthiness is a foundation for deploying aritificial intelligence</i></h3>
			<p className="link"></p>
		    </div>
		    <div className="cont-fm fl">
			<p className="f16">Contact</p>
			<p className="f7s"><img src={f7} alt=""/>Address: 1 Cleveland St, Darlington, NSW 2008, Australia</p>
			<p className="f8s"><img src={f8} alt=""/>Tel: +61 2 8627 5966</p>
			<p className="f9s"><img src={f9} alt=""/>Email: tml.laboratory@gmail.com</p> 
		    </div>
		</div>
	    </div>	
	);
    }
}

export default Bottom
