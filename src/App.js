import React from 'react';
import './App.css';

import Team from './Team';
import Home from './Home';
import Head from './Head';
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


			<div>
			    
			    
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
			    </div>
		    </Switch>
		</HashRouter>
	    
	    <Bottom />
	</div>
    );

}



function About() {
    return (
	<div>
	    <Head />
	    <Banner title="About Us" />
	    <div class="container justify-content-md-center">
		About Us
	    </div>
	 </div>
    );
}


export default App;
