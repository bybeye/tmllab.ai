import React from 'react';
import "./MemEducation.css";
import study_icon from './images/study_icon.png';

class MemEducation extends React.Component{


    render(){
        return (
            <div className="row w-100 edu">
              <div>
                <img src={study_icon} style={{width:"18px"}} alt=""/>
              </div>
	      <div className="col">
		{this.props.uni}<br/>
                <span className="uni_font">{this.props.time !=="" && this.props.time!==undefined ?  (<span> {this.props.time}<br/> </span>) : ("") }</span>
                <span className="uni_font">{this.props.speciality}</span>
	      </div>
	    </div>
        );
    }
}

export default MemEducation;
