import React from 'react';
import {NavLink} from "react-router-dom";
import logo from './images/group_logo.png'; 


class Head extends React.Component{

    backTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    render() {
	return (
	    <div className="container justify-content-md-center" >
		<div className="row">
		    <div className="col"><img src= {logo} alt="Logo" width="100" /></div>
		    <div className="col"></div>
		    <div className="col-8">
			<ul className="nav justify-content-end">
			    <li className="nav-item">
				<NavLink className="nav-link" to="/" onClick={this.backTop}>Home</NavLink>
			    </li>
			    <li className="nav-item">
				<NavLink className="nav-link" to="/research" onClick={this.backTop}>Research</NavLink>
			    </li>
			    
			    <li className="nav-item">
				<NavLink className="nav-link" to="/team" onClick={this.backTop}>Team</NavLink>
			    </li>
			    
			    <li className="nav-item">
				<NavLink className="nav-link" to="/about" onClick={this.backTop}>About</NavLink>
			    </li>
			</ul>
		    </div>
		</div>
	    </div>
	)}

}

export default Head
