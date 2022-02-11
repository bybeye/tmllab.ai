import React from 'react';
import './Team.css';


class PersonLink extends React.Component{
    
    render() {
	return (
	    <div className="col-6 col-md-3">
	      <div className="container p-box">
		<div className="row align-items-start justify-content-center">
		  <img src={this.props.img} alt={this.props.name} width="150" className="rounded-circle"/>
		</div>
		<div className="row justify-content-center mem_name" >

                  {this.props.link !=="" && this.props.link!==undefined ?
		   <a href={this.props.link} target="_blank" rel="noopener noreferrer">
		    {this.props.name}
		  </a>: (this.props.name) }
		</div>
		<div className="row align-items-end justify-content-center">
		  {this.props.description}
		</div>
	      </div>
	    </div>
	);
	
    }

}


export default PersonLink;
