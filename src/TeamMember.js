import React from 'react';
import HeadWhite from './HeadWhite';
import Banner from './Banner';
import teamData from './teamData';
import Paper from './Paper';
import MemHonor from './MemHonor';
import MemActivity from './MemActivity';
import MemEducation from './MemEducation';

import github from './images/github.png';
import linkedin from './images/linkedin.png';
import scholar from './images/google scholar.png';
import './TeamMember.css';


class TeamMember extends React.Component{

    constructor(props) {
	super(props);
        var js_url = window.location.href;
        this.state={ user_id : parseInt(js_url.substring(js_url.lastIndexOf("/")+1, js_url.length))};

    }
    
    render() {
	var person = teamData.map(
	    personInfo =>{
		if( personInfo.id === this.state.user_id){
		    return  personInfo;
		}
		return null;
	    }).filter(item => item != null)[0];
        

        const listUnis = person.education.map((item, i) =>
            <MemEducation key={i} image_url={item.image_url} uni={item.uni} time={item.time} speciality={item.speciality}/>
        );

        const listHonors = person.honors.map((item, i) =>
            <MemHonor  key={i} content={item.content} year={item.year} />
        );

        const listActivies = person.activity.map((item, i) =>
            <MemActivity  key={i} content={item.content} year={item.year} />
        );

        const listPublications = person.publications.map((item, i) =>
            <Paper  key={i} title={item.title} authors={item.authors} pdf={item.pdf} conference={item.conference} highlight={item.highlight} code={item.code}/>
        );


	return (
	    <div>
	      <HeadWhite />
	      <Banner title="TEAM MEMBER" />
	      <div className="content-container" style={{width: "1200px"}}>
		<div className="row align-items-left">
		  <div className="col-12 col-md-3 h-100 nopadding">
		    <div className="l_info">
		      <div className="row justify-content-center">
			<img src={person.image_url} alt={person.name} width="150" className="rounded-circle"/>
			
		      </div>
		      <div className="row m_name justify-content-center">
			{person.name}
		      </div>
		      <div className="row justify-content-center">
			{person.type}
			<br/><br/>
		      </div>
		      {person.address!=="" ? (
			  <div className="row">
                            <svg width="18px" height="18px" viewBox="0 -5 20 20" className="bi bi-geo-alt-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
			     &nbsp;{person.address}
			  </div>) : (" ") }

		      {person.email!=="" ? (
			  <div className="row">
                            <svg width="18px" height="18px" viewBox="0 -5 20 20" className="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
</svg>
			     &nbsp;{person.email}
			  </div>) : (" ") }

		      {person.linkedin!=="" ? (
			  <div className="row">
                            <img src={linkedin} alt="Linkedin" style={{width:"16px", paddingTop:"3px"}} /> &nbsp;
			    <a href={person.linkedin}>LinkedIn</a>
			  </div>) : (" ") }

		      {person.github!=="" ? (
			  <div className="row">
                            <img src={github} alt="Github" style={{width:"16px", paddingTop:"3px"}} /> &nbsp;
			    <a href={person.github}> Github</a>
			  </div>) : (" ") }

		      {person.google_scholar!=="" ? (
			  <div className="row">
                            <img src={scholar} alt="Google Scholar" style={{width:"16px", paddingTop:"3px"}} /> &nbsp;
			    <a href={person.google_scholar}>Google Scholar</a>
			  </div>) : (" ") }
		      
		    </div>
		  </div>
		  <div className="col-12 col-md-7 h-100 nopadding">
		    <div className="r_info">
		      <div className="row">
			<h2>About me</h2>
		      </div>
		      <div className="row mem_content border-top">
			<p>
			  {person.about_me}
			</p>
		      </div>
		      <div className="row">
			<h2>Education</h2>
		      </div>
                      <div className="row mem_content border-top">
                        {listUnis}
                      </div>
		      <div className="row">
			<h2>Research interests</h2>
		      </div>
		      <div className="row mem_content border-top">
			<p>
			  {person.interests}
			</p>
		      </div>

                      {listActivies.length>0 && listActivies!==null ?(
                          <div>
		            <div className="row align-items-start">
			      <h2>Academic Activity</h2>
		            </div>
                            <div className="row mem_content border-top" style={{paddingLeft:"20px"}}>
                              {listActivies}
                            </div>
                          </div>
                      ): (" ") }
		      

                      {listHonors.length>0 && listHonors!==null ?
                       (<div>
                           <div className="row align-items-start">
			     <h2>Honors & Awards</h2>
		           </div>
                          <div className="row mem_content border-top" style={{paddingLeft:"20px"}}>
                            {listHonors}
                           </div>
                        </div>
                       ): (" ") }

                      {
		      listPublications.length>0 && listPublications!==null ?
                       (<div>
                          <div className="row align-items-start">
			    <h2>Publications</h2>
		          </div>
                          <div className="row mem_content border-top">
                            {listPublications}
		          </div>
		        </div>
                       ) : (" ") }
                    </div>
		  </div>
                  <div className="col-12 col-md-3 h-100 nopadding">
	          </div>
                </div>
	      </div>
	    </div>


	);

    }

}

export default TeamMember;

