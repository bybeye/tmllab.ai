import React from 'react';
// import './Research.css';

class Dataset extends React.Component{
    
    render() {
	return (
	    <div class="row">
		<div class="col-10">
		    <div class="card">
			<div class="card-body">
			    <div class="row">
				<div class="col-6">
				    <img src={this.props.image} alt={this.props.name} width="300" class="rounded-0"/>
				</div>
				<div class="col-6">
				    <h4>{this.props.name}</h4>
				    {this.props.date}
				</div>
			    </div>
			</div>
		    </div>
		    <br/>
		</div>
	    </div>
	)
	
    }

}


export default Dataset
