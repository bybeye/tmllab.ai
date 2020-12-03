import React from 'react';
import './Banner.css';


class Banner extends React.Component {
    // constructor(props) {
    // 	super(props);
    // }
    
    render() {
	return (
	    <div className="banner-cont">
		<div className="banner-text">
			<p className="f30">{this.props.title}</p>
			<p className="f16">{this.props.subtitle}</p>
		</div>
	    </div>
	)
    }

} 

export default Banner
