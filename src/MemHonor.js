import React from 'react';

class MemHonor extends React.Component{

    render(){
        return (
            <div className="row w-100">
              <div>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="7" r="4"/>
                </svg>
              </div>
              <div className="col">
	        {this.props.year}, {this.props.content}
	      </div>
	    </div>
        );
    }
}

export default MemHonor;
