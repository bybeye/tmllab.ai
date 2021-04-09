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
import James from './images/James.jpg';
import Jeremy from './images/Jeremy.jpg';

// import ChenGong from './images/ChenGong.png';
// import GangNiu from './images/GangNiu.png';
// import MingmingGong from './images/MingmingGong.png';
// import bhan from './images/bhan.jpg';


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
		  <div className="col-md-3 col-12 m-hidden" style={{paddingBottom:"50px"}}>
		    <button onClick={()=>this.scrollToAnchor('dir')} className="btn btn-outline-primary rounded-pill active"><Spacer amount={11}/>Director<Spacer amount={12}/></button> <br/> <br/>
                    {/* <button onClick={()=>this.scrollToAnchor('stra')} className="btn btn-outline-primary rounded-pill">Strategic collaborator</button> <br/> <br/> */}
                     <button onClick={()=>this.scrollToAnchor('con')} className="btn btn-outline-primary rounded-pill"><Spacer amount={9}/>Consultant<Spacer amount={9}/></button> <br/> <br/> 
		    <button onClick={()=>this.scrollToAnchor('phd')} className="btn btn-outline-primary rounded-pill"><Spacer amount={6}/>PhD Students<Spacer amount={6}/></button> <br/> <br/> 
		    <button onClick={()=>this.scrollToAnchor('master')} className="btn btn-outline-primary rounded-pill"><Spacer amount={3}/>Master Students<Spacer amount={4}/></button> <br/> <br/>
		    <button onClick={()=>this.scrollToAnchor('honour')} className="btn btn-outline-primary rounded-pill"><Spacer amount={2}/>Honours Students<Spacer amount={2}/></button> <br/> <br/> 
		    <button onClick={()=>this.scrollToAnchor('gra')} className="btn btn-outline-primary rounded-pill">Graduated Students</button>
		  </div>

		  <div className="col-md-9 col-12 team-container">
		    <h3 id="dir">Director</h3> <br/>
		    <div className="row">
		      <PersonLink img={p1} name="Tongliang Liu" link="https://tongliang-liu.github.io/"/>
		    </div>
		    <hr></hr><br/>

                    {/* <h3 id="stra">Strategic collaborator</h3> <br/> */}
                    {/* <div className="row"> */}
		    {/*   <Person img={GangNiu} name="Dr Gang Niu"  /> */}
                    {/*   <Person img={bhan} name="Dr Bo Han"  /> */}
                    {/*   <Person img={MingmingGong} name="Dr Mingming Gong"  /> */}
                    {/*   <Person img={ChenGong} name="Dr Chen Gong"  /> */}
		    {/* </div> */}
                    {/* <hr></hr><br/> */}
                    
                    <h3 id="con">Consultant</h3> <br/>
                    <div className="row">
		      <Person img={Michael} name="Michael Huang"  description="(Industry Partner)"/>
		    </div>
                    <hr></hr><br/>
                    
		    <h3 id="phd">PhD Students</h3> <br/>
		    <div className="row">
		      <Person id="10" img={yuyao} name="Yu Yao"/>
		      <Person id="11" img={sonhua} name="Songhua Wu"/>
		      <Person id="12" img={yingbin} name="Yingbin Bai"/>
		      <Person id="13" img={chaojian} name="Chaojian Yu" />
		      <Person id="14" img={xiaobo} name="Xiaobo Xia"/>
		      <Person id="15" img={yuxuan} name="Yuxuan Du" description="(Co-supervised with Prof Dacheng Tao)"/>
		      <Person id="16" img={xuefeng} name="Xuefeng Li" description="(Co-supervised with Dr Alan Blair)"/>
		      <Person id="17" img={shijun} name="Shijun Cai" description="(Co-supervised with Prof Seokhee Hong)"/>
		    </div>
		    <hr></hr><br/>
		    <h3 id="master">Master Students</h3> <br/>
		    <div className="row">
		      <Person id="20" img={Kewei} name="Kewei Wang"/>
		      <Person id="21" img={jialiang} name="Jialiang Shen"/>
		      <Person img={rihui} name="Rihui Wu"/>
		    </div>
		    <hr></hr><br/>
		    <h3 id="honour">Honours Students</h3> <br/>
		    <div className="row">
		      <Person img={zhengning} name="Zhengning Wu"/>
		      <Person img={kangzhao} name="Kangzhao Xia"/>
		      <Person img={Yuhao} name="Yuhao Hu"/>
		      <Person img={jerry} name="Jerry Tan"/>
                      <Person img={James} name="James Wood"/>
		      <Person img={Jeremy} name="Jeremy Gillen"/>
		    </div>

		    <hr></hr><br/>
		    <h3 id="gra">Graduated Research Students</h3> <br/>
		    <div className="row">
		      <Person img={erkun} name="Erkun Yang (PhD)"/>
		      <Person img={xinyu} name="Xiyu Yu (PhD)"/>
		      <Person img={yuxuan} name="Yuxuan Du (PhD)"/>
		      <Person img={chencheng} name="Cheng Chen (MPhil)"/>
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
