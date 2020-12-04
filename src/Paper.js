import React from 'react';
import './Research.css';

class Paper extends React.Component{
    
    render() {
	let pdf_out, code_out, highlight_out, source_out;
	if (this.props.pdf) {
	    pdf_out = (<a href={this.props.pdf} target="_blank" rel="noopener noreferrer">[pdf]</a>);
	}
	if (this.props.source){
	    source_out = (<a href={this.props.source} target="_blank" rel="noopener noreferrer">[paper]</a>);
	 }
	if (this.props.code) {
	    code_out = (<a href={this.props.code} target="_blank" rel="noopener noreferrer">[code]</a>);
	}
	if (this.props.highlight) {
	    highlight_out = (<div><span className="text-danger">(<b>{this.props.highlight}</b>) </span></div>);
	}
	
	return (
	    <div className="row">
	      <div className="col">
		<div className="Paper">
		  {this.props.authors} &nbsp; <br/>
		  <b>{this.props.title} &nbsp;</b><br/>
		  {this.props.conference}  &nbsp; {pdf_out}{source_out}&nbsp;{code_out}{highlight_out}<br/>
		  
		  
		</div>	
	      </div>
	    </div>
	);
	
    }

}


export default Paper;

