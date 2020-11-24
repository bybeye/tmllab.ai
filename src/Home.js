import React from 'react';
import logo from './images/group_logo.png';
import {Link, NavLink} from "react-router-dom";
import './Home.css';
import rimg from './images/new-r.jpeg';
import rimg2 from './images/university.png';
import p1 from './images/p1.png';
import p2 from './images/p2.jpg';
import Spacer from 'react-add-space';

class Home extends React.Component{
    state = {
	deskHeight: window.innerHeight,
	deskWidth: window.innerWidth,
	topClassName:"home-top",
    }
    
    componentDidMount() {
	this.handleSize()
	window.addEventListener('resize', this.handleSize);
	window.addEventListener('scroll', this.handleTopFix);
	document.addEventListener("keydown", this.handleSpaceBarDown);
    }
    
    componentWillUnmount() {
	window.removeEventListener('resize', this.handleSize);
	window.removeEventListener('scroll', this.handleTopFix);
	document.removeEventListener("keydown", this.handleSpaceBarDown);
    }
    
    handleSize = () => {
	var height = window.innerHeight
	var width = window.innerWidth

	if(height<750){
	    height=750;
	}
	
	if(width>=800){
	    width = 1200
	}

	this.setState({
            deskHeight:height,
	    deskWidth:width,
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
		// topClassName:"home-top-fixed",
		topClassName:"home-top", 
	    });
	}
    }

    handleSpaceBarDown = (event) => {
	var Space_KEY = 32;
	
	if(event.keyCode === Space_KEY ){
	    event.preventDefault();
	    // window.scrollBy(0, 20)
	    var pageNum = window.scrollY / this.state.deskHeight + 1
	    window.scroll(0, this.state.deskHeight * pageNum)
	    //alert(window.scrollY  + ", " +this.state.deskHeight * pageNum)
	}
    }

    render() {
	const { deskHeight, deskWidth, topClassName } = this.state;
	
	return (
	    <div>
		<div class="home-container">
		    <div class="clearfix home-contain-inner" style={{width: deskWidth, height: deskHeight}}>
			<div className={topClassName}>
			    <div class="home-top-inner" style={{width: deskWidth}}>
				<Link to="/">
				    <img src={logo} alt="" class="logo fl"/>
				</Link>
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
				    <li>
					 <NavLink className="nav-title" to="/" onClick={this.backTop}>Join Us</NavLink>
				    </li>
				</ul>
				</div>
			    </div>
			</div>
			<div className="b-div container-fluid">
			    <div class="row w-100 justify-content-center align-items-center" style={{height: deskHeight-80}}>
				<div class="col-9 col-xl-9 nopadding">
				    <span class="h1-title align-middle">Our mission is to make machines trustworthy, which is a foundation for our society to develop and deploy artificial intelligence to improve our lives.</span><br/><br/>
				    <span className="b-learn-more">Learn More </span><br/><br/><br/><br/><br/><br/>
				</div>
				<div class = "col-3 col-xl-3 nopadding">
				</div>
			    </div>
			</div>
		    </div>
		</div>
		
		<div class="news container-fluid" style={{ width: deskWidth, height: deskHeight}}>
		    <div class="row w-100 h-100 justify-content-center align-items-center">
			<div class="col-6 col-xl-6 nopadding">
			    <h2 class="h2-title title">TML News</h2>
			    <div class="fl l-img">
				<img src={rimg} alt=""/>
			    </div>
			</div>
			
			<div class="col-6 col-xl-6 nopadding" >
			    <h2 class="h2-title title"> &nbsp;</h2>
			    <div class="r-text">
				<div class="r-inner-text">
				    <a href="/#" >We have two papers on learning with label noise been accepted by NeurIPS 2020. Big congrats to Yu and Xiaobo!</a>
				</div>
			    </div>
			</div>
		    </div>
		</div>
		
		<div class="research clearfix">
		    <div class="container-fluid" style={{width: deskWidth, height: deskHeight}}>
			<div class="row w-100 h-100 justify-content-center align-items-center">
			    <div class="container-fluid">
				<div class = "row">
				    <h2 class="h2-title-black">TML Research</h2>
				</div>
				<div class = "row">
				    <div class="col-6 col-xl-6 nopadding">
					<div class="h3-content"> We are working together to promote trustworthy machine learning algorithms and push their boundaries. Specifically, together with practitioners, we find promising applications, address critical issues in emerging trends, and deal with open/long-standing problems.</div>
				    </div>
				    <div class="col-6 col-xl-6 nopadding">
					<div class="right-text fr">
					    <p class="bottom-line" style={{ paddingTop: 0}}><NavLink className="nav-link nopadding" to="/team" onClick={this.backTop}>Team <Spacer amount={30}/> <span> > </span></NavLink></p>
					    <p class="bottom-line"><NavLink className="nav-link nopadding" to="/research" onClick={this.backTop}>Publications <Spacer amount={18}/><span> ></span></NavLink></p>  
					    <p><NavLink className="nav-link nopadding" to="/models" onClick={this.backTop}>Models <Spacer amount={26}/> <span> > </span></NavLink></p>
					</div>
				    </div>
				</div>
			    </div>
			</div>
		    </div>
		</div>
		
		<div class="researh-cooperate">
		    <div class="container-fluid" style={{ width: deskWidth, height: deskHeight}}>
			<div class="row w-100 h-100 justify-content-center align-items-center">
			    <div class="col-12 nopadding">
				<div class="container-fluid nopadding">
				    <div class="row ">
					<div class="col-10 nopadding">
					    <h2 class="h2-title">Research Collaboration</h2>
					    <div class="h3-content">We collaborate with leading researchers in the area. For example, we exchange staff and students, scientific and technological information, research ideas and materials. We jointly apply for and conduct research activities.</div>
					</div>
				    </div>
				</div>
				<div class="container-fluid">
				    <div class="row justify-content-center align-items-center">
					<div class="col-12 nopadding">
					    <img src={rimg2} class="unimg" alt=""/>
					    <ul class="unis">
						<li><a href="http://www.andrew.cmu.edu/user/kunz1/index.html" target="_blank" rel="noreferrer">CMU team</a></li>
						<li><a href="https://aip.riken.jp/labs/generic_tech/imperfect_inf_learn/)" target="_blank" rel="noreferrer">RIKEN & UTokyo team</a></li>
						<li><a href="https://bhanml.github.io/" target="_blank" rel="noreferrer">HKBU team</a></li>
						<li><a href="https://mingming-gong.github.io/" target="_blank" rel="noreferrer">UoM team</a></li>
					    </ul>
					</div>
				    </div>
				</div>
			    </div>
			</div>
		    </div>
		</div>

		<div class="industry clearfix">
		    <div class="industry-cooperate container-fluid" style={{ width: deskWidth, height: deskHeight}}>
			<div class="row w-100 h-100 justify-content-center align-items-center">
			    <div class="col-12 nopadding">
				<div class="container-fluid">
				    <div class="row w-60">
					<div class="col-9 nopadding">
					    <h2 class="h2-title">Industry Collaboration</h2>
					    <div class="h3-content">
						We collaborate with our industry partners to identify practical challenges, promote economic prosperity, and improve our quality of life. Our students can also gain focused experience related to their research.
					    </div>
					</div>
				    </div>
				</div>

				<div class="container-fluid">
				    <div class="row">
					<div class="col-8 nopadding">
					    <div class="first-pic fl"><img src={p1} alt="" /><span><h6> <Spacer amount={4}/></h6><h4> <Spacer amount={8}/></h4></span></div>
					</div>
					<div class="col-4 nopadding"> 
					    <div class="second-pic fr"><img src={p2} alt="" /><span><h6> <Spacer amount={4}/></h6><h4> <Spacer amount={8}/></h4></span></div>
					</div>
				    </div>
				</div>
			    </div>
			</div>
		    </div>
		</div>
	    </div>


	);
    }
}

export default Home;
