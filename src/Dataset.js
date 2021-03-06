import React from 'react';


class Dataset extends React.Component{
    
    render() {
	return (
	    <div className="row">
	      <div className="col-12 col-md-10 nopadding">
	        <div className="card" style={{borderRadius:"1.25rem"}}>
		  <div className="card-body">
		    <div className="row">
		      <div className="col-6">
			<img src={this.props.image} alt={this.props.name} className="rounded-0 img-fluid"/>
		      </div>
		      <div className="col-6">
			<h4><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.name}</a></h4>
			{this.props.date}
		      </div>
		    </div>
		  </div>
		</div>
		<br/>
	      </div>
	    </div>
	);
	
    }

}


export default Dataset;
