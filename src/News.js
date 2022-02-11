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

                                        
                    {/* 1 Team, 2 Talk, 3 Grant, 4 Award, 5 Paper  6 Service */}
                    <div className="news_content_year">
		      <h3>2022</h3>
		    </div>
                    <NewsItem type="1" date="01/2022" content="Mr Yuhao Wu, Mr Cong Lei and Mr Zhengning Wu joined us as PhD candidates. Welcome!"/>

                    <br/><hr/><br/>

                    <div className="news_content_year">
		      <h3>2021</h3>
		    </div>
                    <NewsItem type="6" date="12/2021" content="Dr Tongliang Liu accepted the invitation to serve as an Area Chair for ICML 2022."/>
                    <NewsItem type="4" date="12/2020" content="Dr Tongliang Liu received the Early Career Research Excellence – Faculty of Engineering, University of Sydney."/>
                    <NewsItem type="6" date="12/2021" content="Dr Tongliang Liu accepted the invitation to serve as an Meta Reviewer for ACM KDD 2022."/>
                    <NewsItem type="6" date="11/2021" content="Dr Tongliang Liu accepted the invitation to serve as an Area Chair for UAI 2022. He also served as an AC (Senior Meta-reviewer) for IJCAI 2021."/>
                    <NewsItem type="4" date="10/2020" content="Dr Tongliang Liu received the Best Workshop Paper Runner-up Award – Masked Face Recognition Challenge and Workshop, CVPR 2021."/>
                    <NewsItem type="5" date="10/2021" content="we have five papers been accepted by NeurIPS 2021. Congrats to Yu and Yingbin!"/>

                    <NewsItem type="1" date="09/2021" content="Mr Xuan Tong joined us as PhD candidates. Welcome!"/>

                    <NewsItem type="4" date="09/2020" content="we received the Quantification of Uncertainties in Biomedical Image Quantification Challenge Award (2nd place) – MICCAI 2021."/>
                    
                    <NewsItem type="6" date="07/2021" content="Dr Tongliang Liu accepted the invitation to serve as an Area Chair for AAAI 2022."/>
                    <NewsItem type="5" date="07/2021" content="we have two papers been accepted by ICCV 2021. Well done Dawei and Yingbin!"/>
                    <NewsItem type="6" date="06/2021" content="Dr Tongliang Liu accepted the invitation to serve as an Area Chair for ICLR 2022."/>

                    <NewsItem type="5" date="05/2021" content="we have six papers been accpted by ICML 2021. Well done Xuefeng, Dawei, Songhua, Xiaobo!"/>
                    <NewsItem type="4" date="04/2020" content="Dr Tongliang Liu received the Best VisNotes Paper Award – IEEE PacificVis 2021."/>

                    
                    <NewsItem type="6" date="04/2021" content={<span>we are organising the Weakly Supervised Representation Learning (WSRL) tutorial at <a href="https://ijcai-21.org/">IJCAI 2021</a >. Welcome to participate! </span>} />
                    <NewsItem type="6" date="04/2021" content={<span>we are organising a Special Issue on <a href="https://wsl-workshop.github.io/MLJ_WSRL_CFP.pdf"> weakly supervised representation learning</a > @ <a href="https://www.springer.com/journal/10994">Machine Learning</a >, Welcome to contribute!</span >} />

                    <NewsItem type="6" date="03/2021" content={<span> we are organising <a href="https://wsl-workshop.github.io/ijcai21.html"> the Weakly Supervised Representation Learning (WSRL) workshop </a > at <a href="https://ijcai-21.org/">IJCAI 2021</a >. Welcome to contribute! </span >} />
                    <NewsItem type="6" date="03/2021" content="Dr Tongliang Liu accepted the invitation to serve as an Area Chair for NeurIPS 2021."/>
                    <NewsItem type="6" date="02/2021" content={<span> we are organising <a href="https://ajml2021.github.io/"> the first Australia-Japan Workshop on Machine Learning</a >.  </span>} />

                    <br/><hr/><br/>
                    
                    <div className="news_content_year">
		      <h3>2020</h3>
		    </div>
                    <NewsItem type="2" date="12/2020" content={<span> <a href="https://bhanml.github.io/" target="_blank" rel="noopener noreferrer">Dr Bo Han</a> (Assistant Professor, Hong Kong Baptist University) gives us a talk on trustworthy representation learning. </span>} />
                    <NewsItem type="2" date="12/2020" content={<span> <a href="https://weiyc.github.io/" target="_blank" rel="noopener noreferrer">Dr Yunchao Wei</a> (Lecturer, UTS) gives us a talk on visual segmentation. </span>} />
                    <NewsItem type="4" date="12/2020" content="Dr Tongliang Liu received the CVI Bioengineering and Digital Science Catalyst Award for the project “Trustworthy learning for advancing cardiovascular disease research at cellular resolutions”."/>
                    <NewsItem type="6" date="11/2020" content="we co-organized the ACML 2020 Workshop on Weakly-supervised Representation Learning. Prof Kun Zhang from CMU and Dr Aditya Menon from Google are invited to give keynote talks." link="https://wsl-workshop.github.io/acml20.html"/>
                    <NewsItem type="3" date="11/2020" content="we receive a Research Foundation of Cerebral Palsy Alliance Grant for developing “Highly Personalized Wearable Assistive Technologies to Enable Social Interactions for People With Complex Communication Needs”, supported by Neurodisability Assist Trust."/>
                    <NewsItem type="1" date="10/2020" content="Mr Yingbin Bai joined us as a PhD candidat. Welcome!"/>
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
