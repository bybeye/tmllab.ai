import React from 'react';
import './Team.css';
import {Link} from "react-router-dom";


class Person extends React.Component{
    
    render() {
	return (
	    <div className="col-6 col-md-3">
	      <div className="container ">
		<div className="row align-items-start justify-content-center">
		  <img src={this.props.img} alt={this.props.name} width="150" className="rounded-circle"/>
		</div>
		<div className="row justify-content-center mem_name" >

                  {this.props.id !=="" && this.props.id!==undefined ?
		  <Link to={{pathname:'/member/' + this.props.id, }}>
		    {this.props.name}
		  </Link>: (this.props.name) }
		</div>
		<div className="row align-items-end justify-content-center">
		  {this.props.description}
		  <br/><br/>
		</div>
	      </div>
	    </div>
	);
	
    }

}


export default Person;
