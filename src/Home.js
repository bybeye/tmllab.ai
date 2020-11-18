import React from 'react';
import Head from './Head';
import logo from './images/group_logo.png';
import {Link, NavLink} from "react-router-dom";
import './Home.css';
import rimg from './images/new-r.jpeg';
import rimg2 from './images/university.png';
import p1 from './images/p1.png';
import p2 from './images/p2.jpg';
import p3 from './images/p4.jpg';
import p4 from './images/p3.jpg';
import Spacer from 'react-add-space';

class Home extends React.Component{
    state = {
	deskHeight: window.innerHeight,
	deskWidth: window.innerWidth,
	halfWidth: 500,
	topClassName:"home-top",
    }
    
    componentDidMount() {
	this.handleSize()
	window.addEventListener('resize', this.handleSize);
	window.addEventListener('scroll', this.handleTopFix);
    }
    
    componentWillUnmount() {
	window.removeEventListener('resize', this.handleSize);
	window.removeEventListener('scroll', this.handleTopFix);
    }
    
    handleSize = () => {
	var height = window.innerHeight
	var width = window.innerWidth
	var hwidth = window.innerWidth-50

	if(height<500){
	    height=500;
	}
	
	if(width>=800){
	    width = 1200
	    hwidth = 500
	}

	this.setState({
            deskHeight:height,
	    deskWidth:width,
	    halfWidth:hwidth
	});
    }

    backTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    handleTopFix = () => {
	if(window.scrollY>200){
	    this.setState({
		topClassName:"home-top-fixed",
	    });
	}else{
	    this.setState({
		topClassName:"home-top",
	    });
	}
    }
    
    render() {
	const { deskHeight, deskWidth, halfWidth, topClassName } = this.state;
	return (
	    <div>
		<div class="home-container">
		    <div class="clearfix home-contain-inner" style={{width: deskWidth, height: deskHeight}}>
			<div className={topClassName}>
			    <div class="home-top-inner" style={{width: deskWidth}}>
			    <Link to="/"><img src={logo} alt="" class="logo fl"/></Link>
			    <div class="home-nav fr">
				<ul class="nav justify-content-end">
				    <li>
					<NavLink className="nav-title" to="/" onClick={this.backTop}>Home</NavLink>
				    </li>
				    <li>
					<NavLink className="nav-title" to="/research" onClick={this.backTop}>Research</NavLink>
				    </li>
				    <li>
					<NavLink className="nav-title" to="/team" onClick={this.backTop}>Team</NavLink>
				    </li>
				    <li>
					<NavLink className="nav-title" to="/about" onClick={this.backTop}>About</NavLink>
				    </li>
				</ul>
				</div>
			    </div>
			</div>
			<div class="b-text clearfix">
			    <span>Our mission is to make machines trustworthy, which is a foundation for our society to develop and deploy artificial intelligence to improve our lives.</span>
			</div>
		    </div>
		</div>	
		<div class="new-r" style={{ width: deskWidth}}>
		    <div style={{height: deskHeight}}>
			<h3>TML News</h3>
			<div class="fl l-img"><img src={rimg} Alt=""/></div>
			<div class="fl l-text" style={{paddingRight:"50px", width: halfWidth}}>
			    <ul style={{listStyleType: "circle"}}>
				<li style={{listStyleType: "disc"}}><a href="" >We have two papers on learning with label noise been accepted by NeurIPS 2020. Big congrats to Yu and Xiaobo!</a></li>
				<li style={{listStyleType: "disc"}}><a href="https://specialreports.theaustralian.com.au/1540291/27/" target="_blank">Dr Tongliang Liu was named in the Early Achievers Leaderboard by The Asutralian.</a></li>
				<li style={{listStyleType: "disc"}}><a href="" >We have two papers on learning with label noise been accepted by ICML 2020. Big congrats to Jiacheng and Xiyu!</a></li>
				<li style={{listStyleType: "disc"}}><a href="" >Workshop, Weakly-supervised and Unsupervised Learning Workshop at the SIAM International Conference on Data Mining (SDM2020).</a></li>
			    </ul>
			</div>

		    </div>
		</div>
		<div class="research clearfix">
		    <div class="research-cont" style={{width: deskWidth, height: deskHeight}}>
			<h2>TML Research</h2>
			<div class="cont-l fl" style={{ width: halfWidth}}>
			We are working together to promote trustworthy machine learning algorithms and push their boundaries. Specifically, together with practitioners, we find promising applications, address critical issues in emerging trends, and deal with open/long-standing problems.</div>
			<div class="cont-r fr">
			    <p><NavLink className="nav-link" to="/team" onClick={this.backTop}>Team  <Spacer amount={8}/> <span> > </span></NavLink></p>
			    <p class="bor-tb"><NavLink className="nav-link" to="/research" onClick={this.backTop}>Publications<span> ></span></NavLink></p>  
			    <p><NavLink className="nav-link" to="/models" onClick={this.backTop}>Models <Spacer amount={6}/> <span> > </span></NavLink></p>
			</div>
		    </div>
		</div>
		<div class="cooperate">
		    <div class="coo-1" style={{ width: deskWidth}}>
			<div class="coo-1-text fl" style={{ width: halfWidth}}>
			    <h2>Research Collaboration</h2>
			    We collaborate with leading researchers in the area. For example, we exchange staff and students, scientific and technological information, research ideas and materials. We jointly apply for and conduct research activities.
			</div>
			<div class="coo-1-pic fr" style={{ width: halfWidth}}>
			    <img src={rimg2} alt=""/>
			    <p>
				<a href="http://www.andrew.cmu.edu/user/kunz1/index.html" target="_blank">CMU team</a>
				<a href="https://aip.riken.jp/labs/generic_tech/imperfect_inf_learn/)" target="_blank">RIKEN & UTokyo team</a>
				<a href="https://bhanml.github.io/" target="_blank">HKBU team</a>
				<a href="https://mingming-gong.github.io/" target="_blank">UoM team</a>
			    </p>
			</div>
		    </div>

		    <div class="clearfix coo-2" style={{ width: deskWidth}}>
			<div class="coo-2-text">
			    <h2>Industry Collaboration</h2>
			    We collaborate with our industry partners to identify practical challenges, promote economic prosperity, and improve our quality of life. Our students can also gain focused experience related to their research.<br/><br/>
			</div>
			<div class="coo-2-pic">
			    <div class="first-pic fl"><img src={p1} alt="" class="img-fluid" /><span><h6> <Spacer amount={4}/></h6><h4> <Spacer amount={8}/></h4></span></div>
			    <div class="second-pic fr"><img src={p2} alt="" class="img-fluid" /><span><h6> <Spacer amount={4}/></h6><h4> <Spacer amount={8}/></h4></span></div>
			</div>
			<div class="coo-2-pic">
			    <div class="second-pic fl"><img src={p3} alt="" class="img-fluid" /><span><h6> <Spacer amount={4}/></h6><h4> <Spacer amount={8}/></h4></span></div>
			    <div class="first-pic fr"><img src={p4} alt="" class="img-fluid" /><span><h6> <Spacer amount={4}/></h6><h4> <Spacer amount={8}/></h4></span></div>
			</div>
		    </div>
		</div>
	    </div>

	);
    }
}

export default Home;
