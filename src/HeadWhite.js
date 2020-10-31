import React from 'react';
import {
    Link
} from "react-router-dom";
import logo from './images/group_logo.png'; 



function HeadWhite(){
    return (
	<div class="container justify-content-md-center">
	    <div class="row">
		<div class="col"><img src= {logo} alt="Logo" width="100" /></div>
		<div class="col"></div>
		<div class="col-8">
		    <ul class="nav justify-content-end">
			<li class="nav-item">
			    <Link className="nav-link" to="/">Home</Link>
			</li>
			<li class="nav-item">
			    <Link className="nav-link" to="/research">Research</Link>
			</li>
			
			<li class="nav-item">
			    <Link className="nav-link" to="/team">Team</Link>
			</li>
			
			<li class="nav-item">
			    <Link className="nav-link" to="/about">About</Link>
			</li>
		    </ul>
		</div>
	    </div>
	</div>
    )

}

export default HeadWhite
