// import './Team.css';
import React from 'react';
import HeadWhite from './HeadWhite'
import Banner from './Banner'
import Dataset from './Dataset'
import {Link} from "react-router-dom";


import Data_blank from './images/Data_blank.png'; 

 
function Databases() {
    return (
	<div>
	    <HeadWhite />
	    <Banner title="RESEARCH" subtitle="Databases" />

	    <div class="row">
		<div class="col-3">
		    <h4 >Research</h4> <br/> 
   		    <Link to="/Research" class="btn btn-outline-primary">Publications</Link> <br/> <br/> 
		    <Link to="/Models" class="btn btn-outline-primary">Models</Link> <br/> <br/> 
   		    <Link to="/Databases" class="btn btn-outline-primary active">Databases</Link>
		</div>

		<div class="col-9">
		    <div class="row">
			<h4 class="text-primary" >Databases</h4><br/><br/><br/>
		    </div>
		    <Dataset image={Data_blank} name="Clothing1M" date="Oct 30, 2020"/>
		    <Dataset image={Data_blank} name="CIFAR-10/100" date="Oct 30, 2020"/>
		    <Dataset image={Data_blank} name="MNIST" date="Oct 30, 2020"/>
		</div>
	    </div>
	</div>
    );
}

export default Databases;
