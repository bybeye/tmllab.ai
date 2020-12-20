import './Models.css';
import React from 'react';
import HeadWhite from './HeadWhite';
import Banner from './Banner';
import {Link} from "react-router-dom";
import Model from "./Model";
import Spacer from 'react-add-space';
import Model_blank from './images/Model_blank.png'; 

// import p1 from './images/Person15.png'; 

class Models extends React.Component{


    componentDidMount() {
        document.body.style.background = "#f3f3f3";
    }

    componentWillUnmount() {
        document.body.style.background = "#fff";
    }

    render(){
        
        return (
	    <div>
	      <HeadWhite />
	      <Banner title="MODELS" />
	      <div className="container justify-content-md-center models-container">

		<div className="row">
		  <div className="col-md-3 col-12" style={{paddingBottom:"50px"}}>
		    <div className="row">
		      <div className="col-md-12 col-12">
   			<Link to="/Research" className="btn btn-outline-primary rounded-pill"><Spacer amount={5}/>Publications<Spacer amount={5}/></Link><br/><br/>
		      </div>
		      <div className="col-md-12 col-12">
			<Link to="/Models" className="btn btn-outline-primary rounded-pill active"><Spacer amount={8}/>Models<Spacer amount={8}/></Link><br/><br/>
		      </div>
		      <div className="col-md-12 col-12">
   			<Link to="/Datasets" className="btn btn-outline-primary rounded-pill"><Spacer amount={7}/>Datasets<Spacer amount={7}/></Link><br/><br/>
		      </div>
		    </div>
		  </div>

		  <div className="col-md-9 col-12 models-content">
		    <div className="row">
		      <h3>Models</h3> <br/><br/>
		    </div>
		    
		    <div className="row">
                      
                      <Model image={Model_blank} name="Part-dependent Label Nosie" link="https://github.com/xiaoboxia/Part-dependent-label-noise"/>
		      <Model image={Model_blank} name="T-revision" link="https://github.com/xiaoboxia/T-Revision"/>
                      <Model image={Model_blank} name="Truncated Cauchy NMF" link="https://github.com/NaiyangGuan/Truncated-Cauchy-Non-Negative-Matrix-Factorization" />
		      <Model image={Model_blank} name="Importance Reweighting" link="https://github.com/xiaoboxia/Classification-with-noisy-labels-by-importance-reweighting"/>
		    </div>
		    <br/> <br/> <br/> <br/> 
		  </div>
		</div>
	      </div>
	    </div>
        );}
}

export default Models;
