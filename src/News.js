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
		       <h3 className="Head4">2020</h3>
		     </div>
                    <NewsItem date="12/2020" content="one paper on data augmentation has been accepted by IJCV."/>
                    <NewsItem date="12/2020" content="two papers on learning with noisy labels have been accepted by AAAI 2021."/>
                    <NewsItem date="12/2020" content="Dr Tongliang Liu received the CVI Bioengineering and Digital Science Catalyst Award."/>
                    <NewsItem date="11/2020" content="we co-organized the ACML 2020 Workshop on Weakly-supervised Representation Learning (https://wsl-workshop.github.io/acml20.html)."/>
                    <NewsItem date="11/2020" content="we receive The Research Foundation of Cerebral Palsy Alliance Grant, supported by Neurodisability Assist Trust."/>
                    <NewsItem date="11/2020" content="one paper on object tracking has been accepted by IEEE TIP. Congrats! Jia!"/>
                    <NewsItem date="11/2020" content="Mr Rihui Wu joined us as a MPhil candidate. Welcome!"/>
                    <NewsItem date="10/2020" content="Mr Yingbin Bai joined us as a PhD candidate. Welcome!"/>
                    <NewsItem date="10/2020" content="we receive an industry grant from Meituan."/>
                    <NewsItem date="9/2020" content="Dr Tongliang Liu was named in the Early Achievers Leaderboard by The Asutralian (https://specialreports.theaustralian.com.au/1540291/27/)"/>
                    <NewsItem date="9/2020" content="Mr Xiaobo Xia and Mr Chaojian Yu will join us as PhD candidates. Welcome!"/>
                    <NewsItem date="8/2020" content="Dr Tongliang Liu accepted the invitation to serve as an Area Chair for IJCAI 2021."/>
                    <NewsItem date="7/2020" content="one paper on multi-task learning has been accepted by ACM MM."/>
                    <NewsItem date="7/2020" content="one paper on face recognition with label noise has been accepted by ECCV."/>
                    <NewsItem date="6/2020" content="papers on label-noise learning, transfer learning, and adversarial learning have been accepted by ICML."/>
                    <NewsItem date="5/2020" content="one paper has been accepted by IEEE TIP."/>
                    <NewsItem date="4/2020" content="Dr Tongliang Liu was appointed as a visiting scientist with RIKEN, Japan."/>
                    <NewsItem date="3/2020" content="Mr Songhua Wu joined our group as a PhD candidate. Welcome!"/>
                    <NewsItem date="3/2020" content="Dr Tongliang Liu accepted the invitation to serve as a reviewer for NeurIPS 2020."/>
                    <NewsItem date="3/2020" content="one paper has been accepted by IEEE TKDE."/>
                    <NewsItem date="1/2020" content="Dr Tongliang Liu accepted the invitation to serve as a reviewer for SIGKDD 2020."/>
                    <NewsItem date="1/2020" content="Dr Tongliang Liu gave a talk on estimating transition matrix for label-noise learning at Peking University, Beijing China."/>
                    <NewsItem date="1/2020" content="Dr Tongliang Liu gave a talk on weakly-supervised learning at 4Paradigm, Beijing China."/>
                    <NewsItem date="1/2020" content="Dr Tongliang Liu gave a talk on label-noise learning at Institute of Information Engineering, Chinese Academy of Science, Beijing China."/>
                    <NewsItem date="1/2020" content="Dr Tongliang Liu gave a talk on finding label noise in data at Hangzhou Dianzi University, Hangzhou China."/>
                    <NewsItem date="1/2020" content="one paper has been accepted by IEEE TNNLS."/>
                    <NewsItem date="1/2020" content="one paper has been accepted by IEEE TMM."/>

                    <br/><hr/><br/>
                    <div className="news_content_year">
		       <h3 className="Head4">2019</h3>
		    </div>
                    <NewsItem date="12/2019" content="we are organizing the Weakly-supervised and Unsupervised Learning Workshop at the upcoming SIAM International Conference on Data Mining (SDM2020). Welcome to join us!"/>
                    <NewsItem date="11/2019" content="two papers have been accepted by AAAI."/>
                    <NewsItem date="11/2019" content="a paper has been accepted by IEEE TCYB."/>
                    <NewsItem date="10/2019" content="Dr Tongliang Liu accepted the invitation to serve as an SPC for IJCAI 2020."/>
                    <NewsItem date="10/2019" content="a paper has been accepted by IEEE TPAMI."/>
                    <NewsItem date="09/2019" content="a paper has been accepted by IEEE TPAMI."/>
                    <NewsItem date="09/2019" content="two papers have been accepted by NeurIPS 2019."/>
                    <NewsItem date="08/2019" content="a paper has been accepted by IEEE TNNLS."/>
                    <NewsItem date="08/2019" content="Dr Tongliang Liu accepted the invitation to serve as a reviewer for AISTATS 2020."/>
                    <NewsItem date="07/2019" content="we have been awarded the ICME Best Paper Award."/>
                    <NewsItem date="07/2019" content="a paper has been accepted by IEEE TNNLS."/>
                    <NewsItem date="06/2019" content="Dr Tongliang Liu accepted the invitation to serve as a Senior PC for AAAI 2020."/>
                    <NewsItem date="05/2019" content="a paper has been accepted by IEEE TIP."/>
                    <NewsItem date="05/2019" content="a paper has been accepted by IJCAI."/>
                    <NewsItem date="04/2019" content="a paper has been accepted by ICME."/>
                    <NewsItem date="03/2019" content="Dr Tongliang Liu accepted the invitation to serve as a reviewer for ACML 2019."/>
                    <NewsItem date="03/2019" content="one paper has been accepted by CVPR. Congrats! Erkun!"/>
                    <NewsItem date="02/2019" content="one paper has been accepted by IEEE TIP. Congrats! Erkun!"/>
                    <NewsItem date="02/2019" content="Dr Tongliang Liu accepted the invitations to serve as a reviewer for (ICML 2019, CVPR 2019, currently serving) NeurIPS 2019, ICCV 2019."/>
                    <NewsItem date="01/2019" content="one paper has been accepted by IEEE TPAMI."/>
                    <NewsItem date="01/2019" content="one paper has been accepted by IEEE TPAMI."/>

                    <br/><hr/><br/>
                    <div className="news_content_year">
		       <h3 className="Head4">2018</h3>
		    </div>
                    <NewsItem date="12/2018" content="one paper has been accepted by IEEE TNNLS."/>
                    <NewsItem date="11/2018" content="one paper has been accepted by IEEE TCYB. Congrats! Erkun!"/>
                    <NewsItem date="09/2018" content="one paper has been accepted by IEEE TNNLS."/>
                    <NewsItem date="08/2018" content="Dr Tongliang Liu accepted the invitations to serve as a reviewer for (NeurIPS 2018, currently serving) ICLR 2019, AISTAS 2019; and as a Senior program committee for AAAI 2019."/>
                    <NewsItem date="07/2018" content="three papers have been accepted by ECCV 2018. Congrats! Xiyu! Ya! and Baosheng!"/>
                    <NewsItem date="06/2018" content="one paper has been accepted by T-IP."/>
                    <NewsItem date="04/2018" content="three papers have been accepted by IJCAI 2018. Congrats! Yuxuan! Yong! and Erkun!"/>
                    <NewsItem date="03/2018" content="one paper has been accepted by T-PAMI."/>
                    <NewsItem date="03/2018" content="one paper has been accepted by CVPR. Congrats! XiYu!"/>
                    
	          </div>
	        </div>
	      </div>
	    </div>
        );

    }

}

export default News;
