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
		    <Route path="/about">
			<About />
		    </Route>

		</Switch>
	    </HashRouter>
	    
	    <Bottom />
	</div>
    );

}



function About() {
    return (
	<div>
	    <HeadWhite />
	    <Banner title="About us" />
	    <div class="container justify-content-md-center">
		<div class="row ">
		    <div class="col-10">
			<br/><br/>
				Founded in 2020, together with industry partners, the Trustworthy Machine Learning Lab (TML Lab) at the University of Sydney hosts, attracts, and connects the best global talents to develop trustworthy machine learning techniques and tools, which are explainable, robust, fair, causally responsible, and privacy-preserving. The mission is to make machines trustworthy, which is a foundation for our society to develop and deploy artificial intelligence to improve our lives.
			<br/><br/><br/><br/>
			</div>
		</div>
	    </div>
	</div>
    );
}


export default App;
