import React from 'react';


class Model extends React.Component{
    
    render() {
	return (
	    <div className="col-sm-12 col-md-4">
		<br/>
		<div className="card">
		    <div className="card-body">
		      <img src={this.props.image} alt={this.props.name} width="50" className="rounded-circle"/><br/><br/>

                      {this.props.link !=="" && this.props.link!==undefined ?
		       <a href={this.props.link} target="_blank" rel="noopener noreferrer">
		         <h6>{this.props.name}</h6>
		       </a>:<h6>{this.props.name}</h6> }
			{this.props.des}
		    </div>
		</div>
	    </div>
	);
	
    }

}


export default Model;
