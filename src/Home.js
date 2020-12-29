import React from 'react';
import logo from './images/group_logo.png';
import {Link, NavLink} from "react-router-dom";
import './Home.css';
import rimg2 from './images/university.png';
import p1 from './images/p1.png';
import p2 from './images/p2.png';
import Spacer from 'react-add-space';
import Swaper from './Swaper';


class Home extends React.Component{
    state = {
	deskHeight: window.innerHeight,
	deskWidth: window.innerWidth,
	topClassName:"home-top",
    }
    
    componentDidMount() {
	this.handleSize();
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
	var height = window.innerHeight;
	var width = window.innerWidth;

	if(height<750){
	    height=750;
	}

        // if(height>1500){
	//     height=1500;
	// }
	
	if(width>=800){
	    width = 1200;
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
	    var pageNum = window.scrollY / this.state.deskHeight + 1;
	    window.scroll(0, this.state.deskHeight * pageNum);
	    //alert(window.scrollY  + ", " +this.state.deskHeight * pageNum)
	}
    }

    render() {
	const { deskHeight, deskWidth, topClassName } = this.state;
	
	return (
	    <div>
		<div className="home-container">
		  <div className="clearfix home-contain-inner" style={{width: deskWidth, height: deskHeight}}>
			<div className={topClassName}>
			  <div className="home-top-inner" style={{width: deskWidth}}>
				<Link to="/" onClick={this.backTop}>
				    <img src={logo} alt="" className="logo fl"/>
				</Link>
			      <div className="home-nav fr m-hidden">
				<ul className="nav justify-content-end">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                              </div>
			  </div>
                          <div className="home-menu d-hidden collapse" id="collapseMenu" style={{width: deskWidth}}>
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
			<div className="b-div container-fluid">
			    <div className="row w-100 justify-content-center align-items-center" style={{height: deskHeight-80}}>
			      <div className="col-12 col-xl-9 ">
                                <div className="slogan">
				  <span className="h1-title align-middle">Our mission is to make machines trustworthy, which is a foundation for our society to develop and deploy artificial intelligence to improve our lives.</span><br/><br/>
	                          <span className="b-learn-more"><Link to="/about" onClick={this.backTop}>Learn More &nbsp;
                                                                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                                     <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                                                   </svg>
                                                                 </Link>
                                  </span><br/><br/><br/><br/><br/><br/>
                                </div>
				</div>
				<div className= "col-12 col-xl-3 m-hidden">
				</div>
			    </div>
			</div>
		    </div>
		</div>
		
		<div className="news container-fluid" style={{ width: deskWidth, height: deskHeight}}>
		    <div className="row w-100 h-100 justify-content-center align-items-center">
			<div className="col-12 col-xl-12">
			    <h2 className="h2-title title">TML News</h2>
			  <Swaper width={deskWidth}/>
			</div>
		    </div>
		</div>
		
		<div className="research clearfix">
		    <div className="container-fluid" style={{width: deskWidth, height: deskHeight}}>
			<div className="row w-100 h-100 justify-content-center align-items-center">
			    <div className="container-fluid">
				<div className= "row">
				    <h2 className="h2-title-black">TML Research</h2>
				</div>
				<div className= "row">
				    <div className="col-12 col-xl-6">
					<div className="h3-content"> We are working together to promote trustworthy machine learning algorithms and push their boundaries. Specifically, together with practitioners, we find promising applications, address critical issues in emerging trends, and deal with open/long-standing problems.</div>
				    </div>
				    <div className="col-12 col-xl-6">
					<div className="right-text fr">
					    <div className="container-fluid">
						<div className="row justify-content-between bottom-line turn-blue">
						    <div className="col-auto mr-auto">
						      <NavLink className="nav-link" to="/team" onClick={this.backTop}>
                                                      Team
						      </NavLink>
                                                    </div>
						  <div className="col-auto">
                                                    <NavLink className="nav-link" to="/team" onClick={this.backTop}>
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                        <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                                      </svg>
                                                    </NavLink></div>
						</div>
						<div className="row justify-content-between bottom-line turn-blue">
						    <div className="col-auto mr-auto">
							<NavLink className="nav-link" to="/research" onClick={this.backTop}>
							    Publications
							</NavLink>
						    </div>
						  <div className="col-auto">
                                                    <NavLink className="nav-link" to="/research" onClick={this.backTop}>
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                        <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                                      </svg>
                                                    </NavLink>
                                                  </div>
						</div>
						<div className="row justify-content-between turn-blue">
						    <div className="col-auto mr-auto">
							<NavLink className="nav-link" to="/models" onClick={this.backTop}>
							    Models
							</NavLink>
						    </div>
						  <div className="col-auto">
                                                    <NavLink className="nav-link" to="/models" onClick={this.backTop}>
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                        <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                                      </svg>
                                                    </NavLink>
                                                  </div>
						</div>
					    </div>
					</div>
				    </div>
				</div>
			    </div>
			</div>
		    </div>
		</div>
		
		<div className="researh-cooperate">
		    <div className="container-fluid" style={{ width: deskWidth, height: deskHeight}}>
			<div className="row w-100 h-100 justify-content-center align-items-center">
			    <div className="col-12">
				<div className="container-fluid">
				    <div className="row ">
					<div className="col-12 col-xl-10">
					    <h2 className="h2-title">Research Collaboration</h2>
					    <div className="h3-content">We collaborate with leading researchers in the area. For example, we exchange staff and students, scientific and technological information, research ideas and materials. We jointly apply for and conduct research activities.</div>
					</div>
				    </div>
				</div>
				<div className="container-fluid">
				    <div className="row justify-content-center align-items-center">
					<div className="col-12">
					    <img src={rimg2} className="unimg" alt=""/>
					    <ul className="unis">
						<li className="right-line"><a href="http://www.andrew.cmu.edu/user/kunz1/index.html" target="_blank" rel="noopener noreferrer">CMU</a></li>
						<li className="right-line"><a href="https://aip.riken.jp/labs/generic_tech/imperfect_inf_learn/)" target="_blank" rel="noopener noreferrer">RIKEN & UTokyo</a></li>
						<li className="right-line"><a href="https://bhanml.github.io/" target="_blank" rel="noopener noreferrer">HKBU</a></li>
						<li><a href="https://mingming-gong.github.io/" target="_blank" rel="noopener noreferrer">UoM</a></li>
					    </ul>
					</div>
				    </div>
				</div>
			    </div>
			</div>
		    </div>
		</div>

		<div className="industry clearfix">
		    <div className="industry-cooperate container-fluid" style={{ width: deskWidth, height: deskHeight}}>
			<div className="row w-100 h-100 justify-content-center align-items-center">
			    <div className="col-12 ">
				<div className="container-fluid">
				    <div className="row w-60">
					<div className="col-12 col-xl-10">
					    <h2 className="h2-title">Industry Collaboration</h2>
					    <div className="h3-content">
						We collaborate with our industry partners to identify practical challenges, promote economic prosperity, and improve our quality of life. Our students can also gain focused experience related to their research.
					    </div>
					</div>
				    </div>
				</div>

				<div className="container-fluid" style={{ paddingTop: "10px"}}>
				    <div className="row">
					<div className="col-12 col-xl-8 m-hidden">
					    <div className="first-pic fl"><img src={p1} alt="" /><span><h6> <Spacer amount={4}/></h6><h3> <Spacer amount={8}/></h3></span></div>
					</div>
					<div className="col-12 col-xl-4 "> 
					    <div className="second-pic fr"><img src={p2} alt="" /><span><h6> <Spacer amount={4}/></h6><h3> <Spacer amount={8}/></h3></span></div>
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
