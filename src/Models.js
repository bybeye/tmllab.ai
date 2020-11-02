// import './Team.css';
import React from 'react';
import HeadWhite from './HeadWhite'
import Banner from './Banner'
import {Link} from "react-router-dom";
import Model from "./Model";

import Model_blank from './images/Model_blank.jpg'; 

// import p1 from './images/Person15.png'; 


function Models() {
    return (
	<div>
	    
	    <HeadWhite />T
	    <Banner title="RESEARCH" />
	    <div class="container justify-content-md-center">

		<div class="row">
		    <div class="col-md-3 col-12" style={{paddingBottom:"50px"}}>
   			<Link to="/Research" class="btn btn-outline-primary">Publications</Link> <br/> <br/> 
			<Link to="/Models" class="btn btn-outline-primary active">Models</Link> <br/> <br/> 
   			<Link to="/Databases" class="btn btn-outline-primary">Databases</Link>
		    </div>

		    <div class="col-md-9 col-12">
			<div class="row">
			    <h4 class="text-primary">Models</h4> <br/><br/>
			</div>
			
			<div class="row">
			    <Model image={Model_blank} name="Double T" des="Oct 30, 2020"/>
			    <Model image={Model_blank} name="Me-Momentum" des="Oct 30, 2020"/>
			    <Model image={Model_blank} name="T-revision" des="Oct 30, 2020"/>
			    <Model image={Model_blank} name="Importance Reweighting" des="Oct 30, 2020"/>
			</div>
			<br/> <br/> <br/> <br/> 
		    </div>
		</div>
	    </div>
	</div>
    );
}

export default Models;
