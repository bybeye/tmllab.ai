// import './Team.css';
import React from 'react';
import HeadWhite from './HeadWhite';
import Banner from './Banner';
import Dataset from './Dataset';
import {Link} from "react-router-dom";
import Spacer from 'react-add-space';
import Data_blank from './images/Data_blank.png'; 


function Datasets() {
    return (
	<div>
	  <HeadWhite />
	  <Banner title="DATASETS" />
	  <div className="container justify-content-md-center">
	    <div className="row">
	      <div className="col-md-3 col-12" style={{paddingBottom:"50px"}}>
		<div className="row">
		  <div className="col-md-12 col-5">
   		    <Link to="/Research" className="btn btn-outline-primary rounded-pill"><Spacer amount={5}/>Publications<Spacer amount={5}/></Link><br/><br/>
		  </div>
		  <div className="col-md-12 col-5">
		    <Link to="/Models" className="btn btn-outline-primary rounded-pill"><Spacer amount={8}/>Models<Spacer amount={8}/></Link><br/><br/>
		  </div>
		  <div className="col-md-12 col-5">
   		    <Link to="/Datasets" className="btn btn-outline-primary rounded-pill active"><Spacer amount={7}/>Datasets<Spacer amount={7}/></Link><br/><br/>
		  </div>
		</div>
		
	      </div>
	      <div className="col-md-9 col-12">
		<div className="row">
		  <h3>Datasets</h3><br/><br/><br/>
		</div>
		<Dataset image={Data_blank} name="CIFAR-10/100" link="https://drive.google.com/drive/folders/1Tz3W3JVYv2nu-mdM6x33KSnRIY1B7ygQ"/>
		<Dataset image={Data_blank} name="MNIST" link="https://drive.google.com/drive/folders/1Tz3W3JVYv2nu-mdM6x33KSnRIY1B7ygQ"/>

                Note: We collected some open source datasets to facilitate our research (some of them are modified for specific purposes). We do not hold the copyright of the datasets. When you use them, please cite the original work.<br/><br/><br/><br/>
	      </div>
	    </div>
	  </div>
	</div>
    );
}

export default Datasets;
