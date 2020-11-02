import React from 'react';
import {
    Link
} from "react-router-dom";
import logo from './images/group_logo.png'; 
import './Head.css';


class HeadWhite extends React.Component{

    backTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    state = {
	deskWidth: window.innerWidth,
	halfWidth: 600,
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
	var hwidth = window.innerWidth

	if(width>=800){
	    width = 1080
	    hwidth = 600
	}

	this.setState({
	    deskWidth:width,
	    halfWidth:hwidth
	});
    }
    
    render(){
	const { deskWidth, halfWidth } = this.state;
	return (
	    <div class="head-container">
		<div class="clearfix head-contain-inner" style={{ width: deskWidth}}>
		    <Link class="nav-link head-link" to="/"><img src={logo} class="logo fl" alt=""/></Link>
		    <div class="head-nav fr">
			<ul class="head-nav justify-content-end">
			    <li class="head-li">
				<Link class="nav-link head-link" to="/" onClick={this.backTop}>Home</Link>
			    </li>
			    <li class="head-li">
				<Link class="nav-link head-link" to="/research" onClick={this.backTop}>Research</Link>
			    </li>
			    <li class="head-li">
				<Link class="nav-link head-link" to="/team" onClick={this.backTop}>Team</Link>
			    </li>
			    <li class="head-li">
				<Link class="nav-link head-link" to="/about" onClick={this.backTop}>About</Link>
			    </li>
			</ul>
		    </div>
		</div>
	    </div>
	)}

}

export default HeadWhite
