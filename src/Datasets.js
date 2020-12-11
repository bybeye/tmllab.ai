import './Datasets.css';
import React from 'react';
import HeadWhite from './HeadWhite';
import Banner from './Banner';
import Dataset from './Dataset';
import {Link} from "react-router-dom";
import Spacer from 'react-add-space';
import CIFAR_IMAGE from './images/Example-CIFAR10.png';
import MNIST_IMAGE from './images/Example-MNIST.jpeg';



class Datasets extends React.Component{


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
	      <Banner title="DATASETS" />
	      <div className="container justify-content-md-center">
	        <div className="row">
	          <div className="col-md-3 col-12 datasets-left" style={{paddingBottom:"50px"}}>
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
	          <div className="col-md-9 col-12 datasets-content">
		    <div className="row">
		      <h3>Datasets</h3><br/><br/><br/>
		    </div>
		    <Dataset image={CIFAR_IMAGE} name="CIFAR-10/100" link="https://drive.google.com/drive/folders/1Tz3W3JVYv2nu-mdM6x33KSnRIY1B7ygQ"/>
		    <Dataset image={MNIST_IMAGE} name="MNIST" link="https://drive.google.com/drive/folders/1Tz3W3JVYv2nu-mdM6x33KSnRIY1B7ygQ"/>

                    Note: We collected some open source datasets to facilitate our research (some of them are modified for specific purposes). We do not hold the copyright of the datasets. When you use them, please cite the original work.<br/><br/><br/><br/>
	          </div>
	        </div>
	      </div>
	    </div>
        );}
}

export default Datasets;
