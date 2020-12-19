import React from 'react';
import './News.css';
import NewsItem from './NewsItem';
import HeadWhite from './HeadWhite';
import Banner from './Banner';

class News extends React.Component{
    
    render() {
        return (
            <div>
	      <HeadWhite />
	      <Banner title="NEWS" />
	      <div className="container justify-content-md-center news_content">
	        <div className="row w-100 justify-content-center align-items-center">
	          <div className="col-12 col-md-10">
                     <div className="news_content_year">
		      <h3>2020</h3>
		     </div>

                    <NewsItem type="2" date="12/2020" content={<span> <a href="https://weiyc.github.io/" target="_blank" rel="noopener noreferrer">Dr Yunchao Wei</a> (Lecturer, UTS) gives us a talk on visual segmentation. </span>} />
                    <NewsItem type="4" date="12/2020" content="Dr Tongliang Liu received the CVI Bioengineering and Digital Science Catalyst Award for the project “Trustworthy learning for advancing cardiovascular disease research at cellular resolutions”."/>
                    <NewsItem type="6" date="11/2020" content="we co-organized the ACML 2020 Workshop on Weakly-supervised Representation Learning. Prof Kun Zhang from CMU and Dr Aditya Menon from Google are invited to give keynote talks." link="https://wsl-workshop.github.io/acml20.html"/>
                    <NewsItem type="3" date="11/2020" content="we receive a Research Foundation of Cerebral Palsy Alliance Grant for developing “Highly Personalized Wearable Assistive Technologies to Enable Social Interactions for People With Complex Communication Needs”, supported by Neurodisability Assist Trust."/>
                    <NewsItem type="1" date="10/2020" content="Mr Yingbin Bai joined us as a PhD candidate. Mr Rihui Wu joined us as a MPhil candidate. Welcome!"/>
                    <NewsItem type="3" date="10/2020" content="we received an industry grant from Meituan on “Weakly supervised or unsupervised machine learning algorithms for UAV image analysis”."/>
                    <NewsItem type="4" date="09/2020" content="Dr Tongliang Liu was named in the Early Achievers Leadboard of Engineering and Computer Science by The Australian in 2020." link="https://specialreports.theaustralian.com.au/1540291/27/"/>
                    <NewsItem type="5" date="09/2020" content="Our work on reducing the estimation error of the noisy label transition matrix and dealing with instance-dependent label noise have been accepted by NeurIPS 2020. Congrats Xiaobo and Yu!"/>
                    <NewsItem type="1" date="09/2020" content="Mr Xiaobo Xia and Mr Chaojian Yu will join us as PhD candidates. Welcome!"/>
                    <NewsItem type="6" date="08/2020" content="Dr Tongliang Liu accepted the invitation to serve as an Area Chair for IJCAI 2021."/>
                    <NewsItem type="1" date="03/2020" content="Mr Songhua Wu joined our group as a PhD candidate. Welcome!"/>
                    <NewsItem type="2" date="01/2020" content="Dr Tongliang Liu was invited to give a talk at Peking University for the second USYD-PKU collaboration workshop."/>
                    <NewsItem type="2" date="01/2020" content="Dr Tongliang Liu was invited to give a talk at 4Paradigm (link http://www.4paradigm.com/), Beijing China. 4Paradigm is an AI technology that helps enterprises to improve work efficiency, reduce risks and achieve greater commercial values."/>
                    <NewsItem type="2" date="01/2020" content="Dr Tongliang Liu was invited to give a talk on label-noise learning at Institute of Information Engineering, Chinese Academy of Science, Beijing China."/>

	          </div>
	        </div>
	      </div>
	    </div>
        );

    }

}

export default News;
