import React from 'react';
import './App.css';

import Team from './Team';
import Home from './Home';
import HeadWhite from './HeadWhite';
import Banner from './Banner'
import Bottom from './Bottom'
import Research from './Research';
import Databases from './Databases';
import Models from './Models';

import {
    Switch,
    Route,
    HashRouter,
} from "react-router-dom";

// basename={process.env.PUBLIC_URL}

function App() {
    return (
	<div>
	    
	    <HashRouter >
		<Switch>
		    <Route exact path="/">
			<Home />
		    </Route>
		    <Route path="/research">
			<Research />
		    </Route>
		    <Route path="/Models">
			<Models />
		    </Route>
		    <Route path="/Databases">
			<Databases />
		    </Route>
		    <Route path="/team">
			<Team />
		    </Route>
		    <Route path="/join">
			<Join />
		    </Route>

		</Switch>
	    </HashRouter>
	    
	    <Bottom />
	</div>
    );

}



function Join() {
    return (
	<div>
	    <HeadWhite />
	    <Banner title="JOIN US" />
	    <div class="container justify-content-md-center">
		<div class="row w-100 justify-content-center align-items-center" style={{height:450}}>
		    <div class="col-12 col-md-10">
			<span class="about-text">
			    Founded in 2020, together with industry partners, the Trustworthy Machine Learning Lab (TML Lab) at the University of Sydney hosts, attracts, and connects the best global talents to develop trustworthy machine learning techniques and tools, which are explainable, robust, fair, causally responsible, and privacy-preserving. The mission is to make machines trustworthy, which is a foundation for our society to develop and deploy artificial intelligence to improve our lives.<br/><br/><br/><br/>
			</span>
		    </div>
		</div>
	    </div>
	</div>
    );
}


export default App;
