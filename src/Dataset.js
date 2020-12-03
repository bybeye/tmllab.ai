import React from 'react';
// import './Research.css';

class Dataset extends React.Component{
    
    render() {
	return (
	    <div className="row">
		<div className="col-12 col-md-10">
		    <div className="card">
			<div className="card-body">
			    <div className="row">
				<div className="col-6">
				    <img src={this.props.image} alt={this.props.name} className="rounded-0 img-fluid"/>
				</div>
				<div className="col-6">
				    <h3>{this.props.name}</h3>
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
