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
// import rihui from './images/Rihui.jpg';
import Michael from './images/Michael.jpeg';
import James from './images/James.jpg';
import Jeremy from './images/Jeremy.jpg';
import dawei from './images/Dawei.jpeg';
import Vinoth from './images/Vinoth.png';
import Joshua from './images/Joshua.jpeg';
import Jazlyn from './images/Jazlyn.jpeg';
import Matthew from './images/Matthew.jpeg';
import Yang from './images/Yang.png';
import Zhaoqing from './images/Zhaoqing.png';
import YuhaoWu from './images/YuhaoWu.jpeg';
import Pengqian from './images/Pengqian.jpg';
import Cong from './images/Cong.jpg';
import Shikun from './images/Shikun.jpg';
import Xuan from './images/Xuan.jpg';
import Runlin from './images/Runlin.jpg';
import Nguyen from './images/Nguyen.jpg';
import Yexin from './images/Yexin.jpg';
import Muyang from './images/Muyang.png';
import Huaxi from './images/Huaxi.jpeg';
import Waugh from './images/Waug.jpg';

import Jiacheng from './images/Jiacheng.png';
import Zhouyang from './images/Yang.jpg';
import Junzhi from './images/Junzhi.png';
import Kanghui from './images/Kanghui.png';
import Huangzhuo from './images/Huangzhuo.png';
import Yexiong from './images/Yexiong.png';
// import Jianglin from './images/Jianglin.png';
import Longrong from './images/Longrong.png';
import Shiming from './images/Shiming.jpeg';
import Xiaolong from './images/xiaolong.jpg';
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
                     <button onClick={()=>this.scrollToAnchor('con')} className="btn btn-outline-primary rounded-pill"><Spacer amount={6}/>Postdoctoral<Spacer amount={7}/></button> <br/> <br/> 
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
                    
                    <h3 id="con">Postdoctoral Reseachers/Research Associates</h3> <br/>
                    <div className="row">
		      			<Person id="10" img={yuyao} name="Yu Yao"/>
                        <Person img={Huaxi} name="Huaxi Huang" description="(Co-supervised with Dr Dadong Wang)"/>
                        <Person img={Xiaolong} name="Xiaolong Shi"/>
		            </div>
                    <hr></hr><br/>
                    
		    <h3 id="phd">PhD Students</h3> <br/>
		    <div className="row">
                      <PersonLink img={sonhua} name="Songhua Wu" link="https://scifancier.github.io/"/>
		      <PersonLink  img={yingbin} name="Yingbin Bai" link="https://bybeye.github.io/"/> {/* id="12"  */}
		      <Person id="13" img={chaojian} name="Chaojian Yu" />
                      <PersonLink img={xiaobo} name="Xiaobo Xia" link="https://xiaoboxia.github.io/"/>
                      <PersonLink img={Vinoth} name="Vinoth Nandakumar" link="https://sites.google.com/view/vinothmn/"/>
                      <Person img={zhengning} name="Zhengning Wu"/>
                      <Person img={YuhaoWu} name="Yuhao Wu"/>
                      <Person img={Cong} name="Cong Lei"/>
                      <PersonLink img={Zhaoqing} name="Zhaoqing Wang" link="https://derrickwang005.github.io/"/>
                      <Person img={Xuan} name="Tong Xuan" description="(part-time)"/>

                      <PersonLink img={Huangzhuo} name="Zhuo Huang" link="https://zhuohuangai.github.io/"/>
                      <PersonLink img={Yexiong} name="Yexiong Lin" link="https://yexionglin.github.io/"/>
                      <PersonLink img={Longrong} name="Longrong Yang" link="https://longrongyang.github.io/"/>
                      <PersonLink img={Shiming} name="Shiming Chen (Visiting PhD student)" link="https://shiming-chen.github.io/"/>

		      <Person id="17" img={shijun} name="Shijun Cai" description="(Co-supervised with Prof Seokhee Hong)"/>
                      <PersonLink img={dawei} name="Dawei Zhou" description="(Co-supervised with Prof Nannan Wang)" link="https://dwdavidxd.github.io/"/>
                      <PersonLink img={Joshua} name="Joshua Kim" description="(Co-supervised with A/Prof Kalina Yacef)" link="http://www.joshuakim.io/"/>
                      <Person img={Yang} name="Shuo Yang" description="(PhD student working with Tongliang Liu)" />
                      <Person img={Shikun} name="Shikun Li" description="(Co-supervised with Prof Shiming Ge)"/>
		    </div>
		    <hr></hr><br/>
		    <h3 id="master">Master Students</h3> <br/>
		    <div className="row">
                      <Person img={Nguyen} name="Duc Nguyen"/>
                      <Person img={Runlin} name="Runlin Lin"/>
                      <PersonLink img={Kanghui} name="Hui Kang" link="https://randydl.github.io/"/>
		    </div>
		    <hr></hr><br/>
		    <h3 id="honour">Honours Students</h3> <br/>
		    <div className="row">
                      <Person img={Muyang} name="Muyang Li"/>
                      <Person img={Zhouyang} name="Yang Zhou"/>
                      <Person img={Jiacheng} name="Jiacheng Zhang"/>
                      <Person img={Junzhi} name="Junzhi Ning"/>
		    </div>

		    <hr></hr><br/>
		    <h3 id="gra">Graduated Research Students</h3> <br/>
		    <div className="row">
		      <Person img={erkun} name="Erkun Yang (PhD)"/>
		      <Person img={xinyu} name="Xiyu Yu (PhD)"/>
                      <PersonLink img={yuxuan} name="Yuxuan Du (PhD)"  link="https://yuxuan-du.github.io/"/>
		      <Person id="16" img={xuefeng} name="Xuefeng Li" description="(PhD)"/>
		      <Person img={chencheng} name="Cheng Chen (MPhil)"/>
                      <Person id="21" img={jialiang} name="Jialiang Shen (MPhil)"/>
		      <Person id="20" img={Kewei} name="Kewei Wang (MPhil)"/>
                      <PersonLink img={Pengqian} name="Pengqian Lu (MPhil)" link="https://pengqian-lu.github.io/" />
		      <Person img={kangzhao} name="Kangzhao Xia (Honours)"/>
		      <Person img={Yuhao} name="Yuhao Hu (Honours)"/>
		      <Person img={jerry} name="Jerry Tan (Honours)"/>
                      <Person img={James} name="James Wood (Honours; University Medal)"/>
		      <Person img={Jeremy} name="Jeremy Gillen (Honours)"/>
                      <Person img={Jazlyn} name="Jazlyn Lin (Honours)"/>
                      <Person img={Matthew} name="Matthew Raad (Honours)"/>
                      <Person img={Yexin} name="Yexin Mao (Honours)"/>
                      <Person img={Waugh} name="Finnegan Waugh (Honours)"/>
		    </div>

		    <br/> <br/>
		  </div>
		  
		</div>
	      </div>
	      
	    </div>
	);
    }
}

export default Team;
