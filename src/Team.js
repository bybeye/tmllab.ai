// import './Team.css';
import React from 'react';
import HeadWhite from './HeadWhite'
import Banner from './Banner'
import Person from './Person'
import './Team.css';

import p1 from './images/tongliang.jpeg'; 
import p2 from './images/Person_blank.jpeg';
import xinyu from './images/Xinyu.png'; 
import erkun from './images/Erkun.jpeg'; 
import yuxuan from './images/Yuxuan.jpeg';
import chencheng from './images/ChenCheng.jpeg';
import yingbin from './images/Yingbin.jpg';

class Team extends React.Component{

    scrollToAnchor = (anchorName) => {
	if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) { anchorElement.scrollIntoView(); }
	}
    }

    render() {
	return (
	    <div>
		<HeadWhite />
		<Banner title="RESEARCH TEAM"/>

		<div class="container justify-content-md-center">
		    <div class="row">
			<div class="col-md-3 col-12" style={{paddingBottom:"50px"}}>
			    <a onClick={()=>this.scrollToAnchor('dir')} class="btn btn-outline-primary active">Directors</a> <br/> <br/> 
			    <a onClick={()=>this.scrollToAnchor('phd')} class="btn btn-outline-primary">PhD Students</a> <br/> <br/> 
			    <a onClick={()=>this.scrollToAnchor('master')} class="btn btn-outline-primary">Master Students</a> <br/> <br/>
			    <a onClick={()=>this.scrollToAnchor('honour')} class="btn btn-outline-primary">Honours Students</a> <br/> <br/> 
			    <a onClick={()=>this.scrollToAnchor('gra')} class="btn btn-outline-primary">Graduated Students</a>
			</div>

			<div class="col-md-9 col-12">
			    <a id="dir"><h4 class="text-primary">Directors</h4> </a><br/>
			    <div class="row">
				<Person img={p1} name="Tongliang Liu"/>
				<Person img={p2} name="Michael Huang"  description="(Industry Partner)"/>
			    </div>
			    <hr></hr><br/>
			    <a id="phd"><h4 class="text-primary" >PhD Students</h4> </a><br/>
			    <div class="row">
				<Person img={p2} name="Yu Yao"/>
				<Person img={p2} name="Songhua Wu"/>
				<Person img={yingbin} name="Yingbin Bai"/>
				<Person img={p2} name="Chaojian Yu" />
				<Person img={p2} name="Xiaobo Xia"/>
				<Person img={p2} name="Yuxuan Du" description="(Co-supervised)"/>
				<Person img={p2} name="Xuefeng Li" description="(Co-supervised)"/>
				<Person img={p2} name="Shijun Cai" description="(Co-supervised)"/>
			    </div>
			    <hr></hr><br/>
			    <a id="master"><h4 class="text-primary" >Master Students</h4> </a> <br/>
			    <div class="row">
				<Person img={p2} name="Kewei Wang"/>
				<Person img={p2} name="Jialiang Shen"/>
			    </div>
			    <hr></hr><br/>
			    <a id="honour"><h4 class="text-primary" >Honours Students</h4> </a> <br/>
			    <div class="row">
				<Person img={p2} name="Zhengning Wu"/>
				<Person img={p2} name="Kangzhao Xia"/>
				<Person img={p2} name="Yuhao Wu"/>
				<Person img={p2} name="Jerry Tan"/>
			    </div>

			    <hr></hr><br/>
			    <a id="gra"><h4 class="text-primary" >Graduated Research Students</h4> </a> <br/>
			    <div class="row">
				<Person img={erkun} name="Erkun Yang"/>
				<Person img={xinyu} name="Xiyu Yu"/>
				<Person img={chencheng} name="Cheng Chen"/>
				<Person img={yuxuan} name="Yuxuan Du"/>
			    </div>

			    
			    <br/> <br/> <br/> <br/> 
			</div>
			
		    </div>
		</div>
		
	    </div>
	);
    }
}

export default Team;
