import React from 'react';
import './Team.css';

class Person extends React.Component{
    
    render() {
	return (
	    <div class="col-sm-6 col-md-3">
		<div class="container">
		    <div class="row align-items-start justify-content-md-center">
			<img src={this.props.img} alt={this.props.name} width="150" class="rounded-circle"/>
		    </div>
		    <div class="row justify-content-md-center">
			{this.props.name}
			</div>
		<div class="row align-items-end justify-content-md-center">
			{this.props.description}
			<br/><br/>
		    </div>
		</div>
	    </div>
	)
	
    }

}


export default Person
