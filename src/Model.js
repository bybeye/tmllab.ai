import React from 'react';
// import './Research.css';

class Model extends React.Component{
    
    render() {
	return (
	    <div class="col-sm-12 col-md-4">
		<br/>
		<div class="card">
		    <div class="card-body">
			<img src={this.props.image} alt={this.props.name} width="50" class="rounded-circle"/><br/><br/>
			<h6>{this.props.name}</h6>
			{this.props.des}
		    </div>
		</div>
	    </div>
	)
	
    }

}


export default Model
