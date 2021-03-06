import React from 'react';


class Model extends React.Component{
    
    render() {
	return (
	    <div className="col-sm-12 col-md-6">
		<br/>
	      <div className="card" style={{borderRadius:"1.25rem", marginRight:"10px"}}>
		    <div className="card-body">
		      <img src={this.props.image} alt={this.props.name} width="60" height="55" /><br/><br/>

                      {this.props.link !=="" && this.props.link!==undefined ?
		       <a href={this.props.link} target="_blank" rel="noopener noreferrer">
		         {this.props.name}
		       </a>:<h6>{this.props.name}</h6> }
			{this.props.des}
		    </div>
		</div>
	    </div>
	);
	
    }

}


export default Model;
