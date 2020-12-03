// import './Team.css';
import React from 'react';
import HeadWhite from './HeadWhite';
import Banner from './Banner';
import Person from './Person';
import PersonLink from './PersonLink';
import './Team.css';
import Spacer from 'react-add-space';

import p1 from './images/tongliang.jpeg'; 
// import p2 from './images/Person_blank.jpeg';
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
import Kewei from './images/Kewei.jpeg';
import rihui from './images/Rihui.jpg';
import Michael from './images/Michael.jpeg';


class Team extends React.Component{

    scrollToAnchor = (anchorName) => {
	if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) {
		console.log("working..."+ anchorElement.offsetTop);
		document.body.scrollTop  = document.documentElement.scrollTop = anchorElement.offsetTop + 120;
	    }
	}
    }

    render() {
	return (
	    <div>
		<HeadWhite />
		<Banner title="RESEARCH TEAM"/>

		<div className="container justify-content-md-center">
		    <div className="row">
			<div className="col-md-3 col-12" style={{paddingBottom:"50px"}}>
			    <button onClick={()=>this.scrollToAnchor('dir')} className="btn btn-outline-primary rounded-pill active"><Spacer amount={6}/>Directors<Spacer amount={6}/></button> <br/> <br/> 
			    <button onClick={()=>this.scrollToAnchor('phd')} className="btn btn-outline-primary rounded-pill"><Spacer amount={3}/>PhD Students<Spacer amount={3}/></button> <br/> <br/> 
			    <button onClick={()=>this.scrollToAnchor('master')} className="btn btn-outline-primary rounded-pill"><Spacer amount={1}/>Master Students<Spacer amount={2}/></button> <br/> <br/>
			    <button onClick={()=>this.scrollToAnchor('honour')} className="btn btn-outline-primary rounded-pill"><Spacer amount={1}/>Honours Students<Spacer amount={1}/></button> <br/> <br/> 
			    <button onClick={()=>this.scrollToAnchor('gra')} className="btn btn-outline-primary rounded-pill">Graduated Students</button>
			</div>

			<div className="col-md-9 col-12">
			    <h3 id="dir" className="text-primary">Directors</h3> <br/>
			    <div className="row">
				<PersonLink img={p1} name="Tongliang Liu" link="https://tongliang-liu.github.io/"/>
				<Person img={Michael} name="Michael Huang"  description="(Industry Partner)"/>
			    </div>
			    <hr></hr><br/>
			    <h3 id="phd" className="text-primary" >PhD Students</h3> <br/>
			    <div className="row">
				<Person id="10" img={yuyao} name="Yu Yao"/>
				<Person img={sonhua} name="Songhua Wu"/>
				<Person id="12" img={yingbin} name="Yingbin Bai"/>
			        <Person img={chaojian} name="Chaojian Yu" />
				<Person img={xiaobo} name="Xiaobo Xia"/>
				<Person img={yuxuan} name="Yuxuan Du" description="(Co-supervised)"/>
				<Person img={xuefeng} name="Xuefeng Li" description="(Co-supervised)"/>
				<Person img={shijun} name="Shijun Cai" description="(Co-supervised)"/>
			    </div>
			    <hr></hr><br/>
			    <h3 id="master" className="text-primary" >Master Students</h3> <br/>
			    <div className="row">
				<Person img={Kewei} name="Kewei Wang"/>
				<Person img={jialiang} name="Jialiang Shen"/>
				<Person img={rihui} name="Rihui Wu"/>
			    </div>
			    <hr></hr><br/>
			    <h3 id="honour" className="text-primary" >Honours Students</h3> <br/>
			    <div className="row">
				<Person img={zhengning} name="Zhengning Wu"/>
				<Person img={kangzhao} name="Kangzhao Xia"/>
				<Person img={Yuhao} name="Yuhao Hu"/>
				<Person img={jerry} name="Jerry Tan"/>
			    </div>

			    <hr></hr><br/>
			    <h3 id="gra" className="text-primary" >Graduated Research Students</h3> <br/>
			    <div className="row">
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
