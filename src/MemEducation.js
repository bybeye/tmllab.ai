import React from 'react';
import "./MemEducation.css";

class MemEducation extends React.Component{


    render(){
        return (
            <div className="row w-100 edu">
	      <div className="col">
		<span className="uni_name">{this.props.uni}</span><br/>
                {this.props.time !=="" && this.props.time!==undefined ?  (<span> {this.props.time}<br/> </span>) : ("") }
                {this.props.speciality}
	      </div>
	    </div>
        );
    }
}

export default MemEducation;
