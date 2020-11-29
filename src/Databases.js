// import './Team.css';
import React from 'react';
import HeadWhite from './HeadWhite'
import Banner from './Banner'
import Dataset from './Dataset'
import {Link} from "react-router-dom";
import Spacer from 'react-add-space';
import Data_blank from './images/Data_blank.png'; 


function Databases() {
    return (
	<div>
	    <HeadWhite />
	    <Banner title="RESEARCH" />
	    <div class="container justify-content-md-center">
		<div class="row">
		    <div class="col-md-3 col-12" style={{paddingBottom:"50px"}}>
			<div class="row">
			    <div class="col-md-12 col-5">
   				<Link to="/Research" class="btn btn-outline-primary rounded-pill">Publications</Link><br/><br/>
			    </div>
			    <div class="col-md-12 col-5">
				<Link to="/Models" class="btn btn-outline-primary rounded-pill"><Spacer amount={3}/>Models<Spacer amount={3}/></Link><br/><br/>
			    </div>
			    <div class="col-md-12 col-5">
   				<Link to="/Databases" class="btn btn-outline-primary rounded-pill active"><Spacer amount={1}/>Databases<Spacer amount={2}/></Link><br/><br/>
			    </div>
			</div>
			
		    </div>
		    <div class="col-md-9 col-12">
			<div class="row">
			    <h4 class="text-primary" >Databases</h4><br/><br/><br/>
			</div>
			<Dataset image={Data_blank} name="Clothing1M" />
			<Dataset image={Data_blank} name="CIFAR-10/100" />
			<Dataset image={Data_blank} name="MNIST" />
		    </div>
		</div>
	    </div>
	</div>
    );
}

export default Databases;
