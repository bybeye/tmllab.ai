// import './Team.css';
import React from 'react';
import HeadWhite from './HeadWhite'
import Banner from './Banner'
import Person from './Person'
import './Team.css';
import Spacer from 'react-add-space';

import p1 from './images/tongliang.jpeg'; 
import p2 from './images/Person_blank.jpeg';
import xinyu from './images/Xinyu.png'; 
import erkun from './images/Erkun.jpeg'; 
import yuxuan from './images/Yuxuan.jpeg';
import chencheng from './images/ChenCheng.jpeg';
import yingbin from './images/Yingbin.jpg';
import sonhua from './images/sonhua.jpeg';
import yuyao from './images/yuyao.jpeg';
import shijun from './images/shijun.jpg';
import jialiang from './images/jialiang.png';
import xiaobo from './images/XiaoboXia.jpg';
import kangzhao from './images/kangzhao.jpeg';
import xuefeng from './images/xuefeng.jpg';
import chaojian from './images/ChaojianYu.jpeg';
import zhengning from './images/zhengning.jpg';
import Yuhao from './images/Yuhao.jpeg';
import jerry from './images/Jerry.jpg';


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
			    <a onClick={()=>this.scrollToAnchor('dir')} class="btn btn-outline-primary rounded-pill active"><Spacer amount={6}/>Directors<Spacer amount={6}/></a> <br/> <br/> 
			    <a onClick={()=>this.scrollToAnchor('phd')} class="btn btn-outline-primary rounded-pill"><Spacer amount={3}/>PhD Students<Spacer amount={3}/></a> <br/> <br/> 
			    <a onClick={()=>this.scrollToAnchor('master')} class="btn btn-outline-primary rounded-pill"><Spacer amount={1}/>Master Students<Spacer amount={2}/></a> <br/> <br/>
			    <a onClick={()=>this.scrollToAnchor('honour')} class="btn btn-outline-primary rounded-pill"><Spacer amount={1}/>Honours Students<Spacer amount={1}/></a> <br/> <br/> 
			    <a onClick={()=>this.scrollToAnchor('gra')} class="btn btn-outline-primary rounded-pill">Graduated Students</a>
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
				<Person img={yuyao} name="Yu Yao"/>
				<Person img={sonhua} name="Songhua Wu"/>
				<Person img={yingbin} name="Yingbin Bai"/>
				<Person img={chaojian} name="Chaojian Yu" />
				<Person img={xiaobo} name="Xiaobo Xia"/>
				<Person img={yuxuan} name="Yuxuan Du" description="(Co-supervised)"/>
				<Person img={xuefeng} name="Xuefeng Li" description="(Co-supervised)"/>
				<Person img={shijun} name="Shijun Cai" description="(Co-supervised)"/>
			    </div>
			    <hr></hr><br/>
			    <a id="master"><h4 class="text-primary" >Master Students</h4> </a> <br/>
			    <div class="row">
				<Person img={p2} name="Kewei Wang"/>
				<Person img={jialiang} name="Jialiang Shen"/>
			    </div>
			    <hr></hr><br/>
			    <a id="honour"><h4 class="text-primary" >Honours Students</h4> </a> <br/>
			    <div class="row">
				<Person img={zhengning} name="Zhengning Wu"/>
				<Person img={kangzhao} name="Kangzhao Xia"/>
				<Person img={Yuhao} name="Yuhao Hu"/>
				<Person img={jerry} name="Jerry Tan"/>
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
