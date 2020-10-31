import React from 'react';
import './Banner.css';


class Banner extends React.Component {
    // constructor(props) {
    // 	super(props);
    // }
    
    render() {
	return (
	    <div class="banner-cont">
		<div class="banner-text">
			<p class="f30">{this.props.title}</p>
			<p class="f16">{this.props.subtitle}</p>
		</div>
	    </div>
	)
    }

} 

export default Banner
