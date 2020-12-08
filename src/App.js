import React from 'react';
import './App.css';

import Team from './Team';
import TeamMember from './TeamMember';
import Home from './Home';
import HeadWhite from './HeadWhite';
import Banner from './Banner';
import Bottom from './Bottom';
import Research from './Research';
import Datasets from './Datasets';
import Models from './Models';
import News from './News';

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
	      <Route path="/Datasets">
		<Datasets />
	      </Route>
	      <Route path="/team">
		<Team />
	      </Route>
              <Route path="/news">
		<News />
	      </Route>
	      <Route path="/member">
		<TeamMember />
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
	  <div className="container justify-content-md-center">
	    <div className="row w-100 justify-content-center align-items-center">
	      <div className="col-12 col-md-10 about-text">
                <h5>About the TML Lab</h5>
                
                Founded in 2020, together with industry partners, the Trustworthy Machine Learning Lab (TML Lab) at the University of Sydney hosts, attracts, and connects the best global talents to develop trustworthy machine learning techniques and tools, which are explainable, robust, fair, causally responsible, and privacy-preserving. The mission is to make machines trustworthy, which is a foundation for our society to develop and deploy artificial intelligence to improve our lives.

                <h5>For prospective students</h5>

                We are always seeking for research students with great potential to join our TML Lab. For prospective PhD, MPhil, or Honours candidate, please send Dr Tongliang Liu an email (<a href="mailto:tongliang.liu@sydney.eud.au">tongliang.liu@sydney.eud.au</a>) with your CV, transcript, and papers (if have). We also welcome self-funded visitors to join us (or remotely due to COVID-19). We expect the prospective students to have true enthusiasm for research, backgrounds in mathematics, and strong skills in coding. A lot of time and efforts are expected to devote to the training program.  We will supervise the candidate hunting problems, thinking critically, and publishing paper by solving the major problems. We will also provide strong support to students for collaborations with world-leading scientists and engineers. <br/><br/>


                Some information about scholarships:<br/>
                <ul>
                  <li>For both domestic and international PhD students, you can apply for <a href="https://sydney.edu.au/scholarships/international/postgraduate-research.html">the RTP scholarship or the Faculty scholarship</a>. There is no specific deadline for the application. I would help you assess the probability to get a scholarship.</li>
                  <li>For international PhD students, you can also consider applying for some <a href="https://sydney.edu.au/scholarships/international/postgraduate-research/general.html">general scholarships</a>. There are strict deadlines for the scholarships. For example, the <a href="https://sydney.edu.au/scholarships/e/china-scholarship-council-research-programs-scholarship.html">CSC-USYD</a> scholarship has a deadline normally in December.</li>
                  <li>For all students, there are also many other scholarships to explore. We are happy to supervise outstanding students who have the capability to receive scholarships.</li>
                </ul>


                <h5>About the PI</h5>

                Dr Tongliang Liu is currently a Lecturer (Assistant Professor) with School of Computer Science at the University of Sydney. He received his BEng degree in EEIS from the University of Science and Technology of China (USTC) in 2012 and PhD degree in Information System from University of Technology Sydney (UTS) in 2016. Dr Liu is broadly interested in the fields of trustworthy machine learning and its interdisciplinary applications, with a particular emphasis on learning with noisy labels, transfer learning, adversarial learning, unsupervised learning, and statistical deep learning theory. He is a (meta-) reviewer for various top conferences and journals, such as IEEE TPAMI, IEEE TNNLS, IEEE TIP, NeurIPS, ICML, ICLR, CVPR, ICCV, ECCV, KDD, AAAI, and IJCAI. He received the ICME 2019 best paper award and nominated as the distinguish paper award candidate for IJCAI 2017. He is a recipient of Discovery Early Career Researcher Award (DECRA) from Australian Research Council (ARC); the Cardiovascular Initiative Catalyst Award by the Cardiovascular Initiative in 2020; was shortlisted for the J G Russell Award by Australian Academy of Science (AAS) in 2019; and was Named in the Early Achievers Leadboard of Engineering and Computer Science by The Australian in 2020.

                <h5>About USYD</h5>

                The University of Sydney is the Australia’s first university built in 1850. It is a world-leading university ranked 40th in the world by the 2020 QS world university rankings. It is also one of the most beautiful universities with amazing sandstone buildings. Five Nobel Laureates have been affiliated with the university as graduates and faculty. The School of Computer Science is one of Australia’s leading computer science departments ranked 42th in the world by the 2020 QS computer science rankings. The school hosts three Fellow of the Australian Academy of Science, five ACM/IEEE Fellows and many ARC Laureate/Future/DECRA Fellows.

                <h5>The City of Sydney</h5>

                Sydney, the capital of New South Wales, Australia. It is the oldest and largest city in Australia with a population of about 4 million which is built around a huge harbour. In Sydney, you could taste delicious food from different regions; you could visit the place with different architectural styles; you could meet new friends with diverse cultural backgrounds. Sydney is one of the most beautiful cities in the world. There are well over 100 beaches and more than 200 National Parks, and each site provides you a different experience by its unique characteristics. Sydney attracts most of the biggest acts in music and entertainment. Sydneysiders could see all of their favourite acts without having to travel halfway around the world. If you have a chance, please must come and experience the colorful life in Sydney!
                <br/><br/><br/><br/>

	      </div>
	    </div>
	  </div>
	</div>
    );
}


export default App;
