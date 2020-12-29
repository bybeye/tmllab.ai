import React from 'react';
import {
    Link, NavLink
} from "react-router-dom";
import logo from './images/logo_blue.png'; 
import './Head.css';



class HeadWhite extends React.Component{

    backTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    state = {
	deskWidth: window.innerWidth,
	halfWidth: 600,
    }

    componentDidMount() {
	this.handleSize();
	window.addEventListener('resize', this.handleSize);
    }
    
    componentWillUnmount() {
	window.removeEventListener('resize', this.handleSize);
    }

    handleSize = () => {
	var width = window.innerWidth;

	if(width>=800){
	    width = 1200;
	}

	this.setState({
	    deskWidth:width,
	});
    }
    
    render(){
	const { deskWidth } = this.state;
	return (
	    <div className="head-container">
	      <div className="head-contain-inner" style={{width: deskWidth}}>
		<Link to="/" onClick={this.backTop}><img src={logo} alt="" className="logo fl"/></Link>
		<div className="head-nav fr m-hidden">
		  <ul className="nav justify-content-end m-hidden">
		    <li>
		      <NavLink className="nav-title" to="/" onClick={this.backTop}>Home</NavLink>
		    </li>
		    <li>
		      <NavLink className="nav-title" to="/news" onClick={this.backTop}>News</NavLink>
		    </li>
		    <li>
		      <NavLink className="nav-title" to="/topics" onClick={this.backTop}>Research</NavLink>
		    </li>
		    <li>
		      <NavLink className="nav-title" to="/team" onClick={this.backTop}>Team</NavLink>
		    </li>
		    <li>
		      <NavLink className="nav-title" to="/about" onClick={this.backTop}>About Us</NavLink>
		    </li>
		  </ul>
		</div>
                <div className="menu-button d-hidden" data-toggle="collapse" data-target="#collapseMenu">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </div>
	      </div>
              <div className="head-menu d-hidden collapse" id="collapseMenu" style={{width: deskWidth}}>
                <ul>
                  <li className="border-top border-bottom">
		    <NavLink className="" to="/" onClick={this.backTop}>Home</NavLink>
		  </li>
		  <li className="border-bottom">
		    <NavLink className="" to="/news" onClick={this.backTop}>News</NavLink>
		  </li>
		  <li className="border-bottom">
		    <NavLink className="" to="/topics" onClick={this.backTop}>Research</NavLink>
		  </li>
		  <li className="border-bottom">
		    <NavLink className="" to="/team" onClick={this.backTop}>Team</NavLink>
		  </li>
		  <li className="border-bottom">
		    <NavLink className="" to="/about" onClick={this.backTop}>About Us</NavLink>
		  </li>
                </ul>
              </div>
	    </div>
	);}

}

export default HeadWhite;
