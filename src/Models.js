// import './Team.css';
import React from 'react';
import HeadWhite from './HeadWhite'
import Banner from './Banner'
import {Link} from "react-router-dom";
import Model from "./Model";
import Spacer from 'react-add-space';
import Model_blank from './images/Model_blank.jpg'; 

// import p1 from './images/Person15.png'; 


function Models() {
    return (
	<div>
	    <HeadWhite />
	    <Banner title="RESEARCH" />
	    <div className="container justify-content-md-center">

		<div className="row">
		    <div className="col-md-3 col-12" style={{paddingBottom:"50px"}}>
			<div className="row">
			    <div className="col-md-12 col-5">
   				<Link to="/Research" className="btn btn-outline-primary rounded-pill">Publications</Link><br/><br/>
			    </div>
			    <div className="col-md-12 col-5">
				<Link to="/Models" className="btn btn-outline-primary rounded-pill active"><Spacer amount={3}/>Models<Spacer amount={3}/></Link><br/><br/>
			    </div>
			    <div className="col-md-12 col-5">
   				<Link to="/Databases" className="btn btn-outline-primary rounded-pill"><Spacer amount={1}/>Databases<Spacer amount={2}/></Link><br/><br/>
			    </div>
			</div>
		    </div>

		    <div className="col-md-9 col-12">
			<div className="row">
			    <h3 className="text-primary">Models</h3> <br/><br/>
			</div>
			
			<div className="row">
			    <Model image={Model_blank} name="Me-Momentum" />
			    <Model image={Model_blank} name="T-revision" />
			    <Model image={Model_blank} name="Importance Reweighting" />
			</div>
			<br/> <br/> <br/> <br/> 
		    </div>
		</div>
	    </div>
	</div>
    );
}

export default Models;
