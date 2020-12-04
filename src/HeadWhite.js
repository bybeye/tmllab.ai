import React from 'react';
import {
    Link, NavLink
} from "react-router-dom";
import logo from './images/logo_blue.png'; 
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
		<div className="head-container">
		    <div className="head-contain-inner" style={{width: deskWidth}}>
			<Link to="/"><img src={logo} alt="" className="logo fl"/></Link>
			<div className="head-nav fr">
			    <ul className="nav justify-content-end">
				<li>
				    <NavLink className="nav-title" to="/" onClick={this.backTop}>Home</NavLink>
				</li>
				<li>
				    <NavLink className="nav-title" to="/news" onClick={this.backTop}>News</NavLink>
				</li>
				<li>
				    <NavLink className="nav-title" to="/research" onClick={this.backTop}>Publications</NavLink>
				</li>
				<li>
				    <NavLink className="nav-title" to="/team" onClick={this.backTop}>Team</NavLink>
				</li>
				<li>
				    <NavLink className="nav-title" to="/join" onClick={this.backTop}>Join Us</NavLink>
				</li>
			    </ul>
			</div>
		    </div>
		</div>
	);}

}

export default HeadWhite;
