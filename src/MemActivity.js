import React from 'react';

class MemActivity extends React.Component{

    render(){
        return (
            <div className="row w-100">
	      <div className="col">
		{this.props.year}, {this.props.content}
	      </div>
	    </div>
        );
    }
}

export default MemActivity;
