import React from 'react';
import {NavLink} from "react-router-dom";
import logo from './images/group_logo.png'; 


function Head(){
    return (
	<div class="container justify-content-md-center">
	    <div class="row">
		<div class="col"><img src= {logo} alt="Logo" width="100" /></div>
		<div class="col"></div>
		<div class="col-8">
		    <ul class="nav justify-content-end">
			<li class="nav-item">
			    <NavLink className="nav-link" to="/">Home</NavLink>
			</li>
			<li class="nav-item">
			    <NavLink className="nav-link" to="/research">Research</NavLink>
			</li>
			
			<li class="nav-item">
			    <NavLink className="nav-link" to="/team">Team</NavLink>
			</li>
			
			<li class="nav-item">
			    <NavLink className="nav-link" to="/about">About</NavLink>
			</li>
		    </ul>
		</div>
	    </div>
	</div>
    )

}

export default Head
