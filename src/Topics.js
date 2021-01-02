import './Topics.css';
import React from 'react';
import HeadWhite from './HeadWhite';
import Banner from './Banner';
import {Link} from "react-router-dom";
import Spacer from 'react-add-space';


class Topics extends React.Component{
    
    render(){
        
        return (
            <div>
	      <HeadWhite />
	      <Banner title="SELECTED TOPICS" />
	      <div className="container justify-content-md-center topics-container">
		<div className="row">
		  <div className="col-md-3 col-12" style={{paddingBottom:"50px"}}>
		    <div className="row">
                      <div className="col-md-12 col-12">
   		        <Link to="/Topicsx" className="btn btn-outline-primary rounded-pill active"><Spacer amount={3}/>Selected topics<Spacer amount={3}/></Link><br/><br/>
		      </div>
		      <div className="col-md-12 col-12">
   			<Link to="/Research" className="btn btn-outline-primary rounded-pill"><Spacer amount={5}/>Publications<Spacer amount={5}/></Link><br/><br/>
		      </div>
		      <div className="col-md-12 col-12">
			<Link to="/Models" className="btn btn-outline-primary rounded-pill"><Spacer amount={8}/>Models<Spacer amount={8}/></Link><br/><br/>
		      </div>
		      <div className="col-md-12 col-12">
   			<Link to="/Datasets" className="btn btn-outline-primary rounded-pill"><Spacer amount={7}/>Datasets<Spacer amount={7}/></Link><br/><br/>
		      </div>
		    </div>
	          </div>
	          <div className="col-md-9 col-12 topics-content">
                    <h3>Research (Selected Topics)</h3>
                    <h5>Learning with label noise</h5>
                    
                    <p>Learning with noisy labels becomes a more and more important topic recently. The reason is that, in the era of big data, datasets are becoming larger and larger. Often, large-scale datasets are infeasible to be annotated accurately due to the cost and time, which naturally brings us cheap datasets with noisy labels. However, the noisy dataset can severally degenerate the performance of machine learning models, especially for the deep neural networks, as they easily memorize and eventually fit label noise. Normally, there are two ways to deal with label noise. One is to extract confident examples, whose labels are correct with a high probability. Another one is to model the noise and then get rid of the side-effect of label noise, i.e., obtain the optimal classifier defined by the clean data by exploiting the noisy data. </p>

                    <b>Relevant Work/Publications:</b><br/>
                    <ol>
                    <li>Estimate the label noise transition matrix by using anchor points [<a href='https://arxiv.org/pdf/1411.7718.pdf)'>TPAMI’15</a>, <a href='https://proceedings.neurips.cc/paper/2020/file/512c5cad6c37edb98ae91c8a76c3a291-Paper.pdf'>NeurIPS’20</a>]</li>
                    <li>Estimate the label noise transition matrix without using anchor points [<a href='https://openaccess.thecvf.com/content_cvpr_2018/papers/Yu_An_Efficient_and_CVPR_2018_paper.pdf'> CVPR’18</a>, <a href='https://papers.nips.cc/paper/2019/file/9308b0d6e5898366a4a986bc33f3d3e7-Paper.pdf'>NeurIPS’19</a>]</li>
                    <li>Learning under instance-dependent label noise [<a href='http://proceedings.mlr.press/v119/cheng20c/cheng20c.pdf'>ICML’20</a>, <a href='https://papers.nips.cc/paper/2020/file/5607fe8879e4fd269e88387e8cb30b7e-Paper.pdf'>NeurIPS’20</a>, <a href='https://gcatnjust.github.io/ChenGong/paper/wang_aaai21_1.pdf'>AAAI’21</a>]</li>
            <li>Deep representation learning under label noise [<a href='http://proceedings.mlr.press/v119/yu20c/yu20c.pdf'>ICML’20</a>,<a href='http://proceedings.mlr.press/v119/guo20d/guo20d.pdf'>ICML’20</a>]</li>
                    <li>Learning with complementary labels [<a href='https://openaccess.thecvf.com/content_ECCV_2018/papers/Xiyu_Yu_Learning_with_Biased_ECCV_2018_paper.pdf'>ECCV’18</a>, <a href='https://arxiv.org/abs/1904.01612'>AAAI’20</a>]</li>
                    <li>Learning with group noise [<a href='https://gcatnjust.github.io/ChenGong/paper/wang_aaai21_2.pdf'>AAAI’21</a>]</li>
            <li>Harnessing side information for classification under label noise [<a href='https://ieeexplore.ieee.org/abstract/document/8848850'>TNNLS’20</a>]</li>
                    <li>Dealing with label noise in the face recognition problem [<a href='http://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123560715.pdf'>ECCV’20</a>]</li>
                    </ol>


                    <h5>Domain adaptation and transfer learning</h5>

                    <p>Just like human, machine can also find the common knowledge between tasks and transfer the knowledge from one task to another one. In machine learning, we can exploit training examples drawn from some related tasks (source domains) to improve the performance on the target task (target domain). This relates two terms in machine learning, i.e., domain adaptation and transfer learning. Domain adaptation refers to how to reduce the difference between the distributions of source and target domain data. Transfer learning refers to how to extract knowledge from source tasks and apply it to improve the learning performance of a target task. We are interested in studying the domain adaptation and transfer learning problems from a causal perspective.</p>


                    <b>Relevant Work/Publications:</b><br/>
                    <ol>
                    <li>Domain adaptation with conditional transferable components [<a href='http://proceedings.mlr.press/v48/gong16.pdf'>ICML’16</a>]</li>
                    <li>Deep domain generalization via conditional invariant representations [<a href='https://openaccess.thecvf.com/content_ECCV_2018/papers/Ya_Li_Deep_Domain_Generalization_ECCV_2018_paper.pdf'>ECCV’18</a>, <a href='https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/view/16595/16558'>AAAI’18</a>]</li>
            <li>A label transformation framework for correcting label shift [<a href='http://proceedings.mlr.press/v119/guo20d/guo20d.pdf'>ICML’20</a>]</li>
                    <li>Heterogeneous transfer learning [<a href='https://www.ijcai.org/Proceedings/2017/0341.pdf'>IJCAI’17</a>, <a href='https://www.ijcai.org/Proceedings/2018/0350.pdf'>IJCAI’18</a>, <a href='https://ieeexplore.ieee.org/abstract/document/8333749'>TPAMI’19</a>, <a href='https://dl.acm.org/doi/10.1145/3394171.3413574'>ACM MM’20</a>, <a href='https://ieeexplore.ieee.org/document/9204804'>TPAMI’accepted</a>]</li>
                    <li>Multi-task learning [<a href='https://www.ijcai.org/Proceedings/15/Papers/512.pdf'>IJCAI’15</a>, <a href='https://ieeexplore.ieee.org/document/7437460'>TPAMI’17</a>, <a href='https://arxiv.org/abs/1904.01747'>TNNLS’18</a>, <a href='https://ieeexplore.ieee.org/document/8513983'>TNNLS’19</a>]</li>
                    </ol>

                    <h5>Robust/Adversarial learning</h5>

                    <p>We are also interested in how to reduce the side effect of noise on the instance, which may be caused by the failure of sensors or even malicious attacks. We human have the ability to correctly recognise the objects even there are noise (e.g., we can easily recognise human faces under extreme illumination conditions, when partially occluded, or even with heavy makeup); while current machine learning algorithms may not. Recent studies also show that an imperceptible noise on the instance will lead machines to make wrong decisions. All those mean that we human and machines are using different feature extraction mechanisms for making decisions. What are the differences? And how to align them? Answering those questions is very important to build robust and trustworthy machine learning algorithms. </p>

                    <b>Relevant Work/Publications:</b><br/>
                    <ol>
                    <li>Efficient gradient approximation for black boxes [<a href='http://proceedings.mlr.press/v119/zhang20o/zhang20o.pdf'>ICML’20</a>]</li>
                    <li>Understanding adversarial attacks via maximum mean discrepancy [<a href='https://arxiv.org/pdf/2010.11415.pdf'>arXiv’20</a>]</li>
                    <li>Robust non-negative matrix factorisation algorithms [<a href='https://ieeexplore.ieee.org/document/7492255'>TNNLS’17</a>, <a href='https://arxiv.org/abs/1906.00495'>TPAMI’19</a>, <a href='https://www.aaai.org/Papers/AAAI/2020GB/AAAI-QiaoM.5577.pdf'>AAAI’20</a>]</li>
                    <li>Compare the robustness of different loss functions [<a href='https://ieeexplore.ieee.org/document/6920341'>ICIST’14</a>, <a href='(https://arxiv.org/abs/1906.00495'>TPAMI’19</a>]</li>
                    </ol>

                    <h5>Statistical (deep) learning theory</h5>


                    <p>Deep learning algorithms have given exciting performances, e.g., painting pictures, beating Go champions, and autonomously driving cars, among others, showing that they have very good generalisation abilities (small differences between training and test errors). These empirical achievements have astounded yet confounded their human creators. Why do deep learning algorithms generalise so well on unseen data? It lacks mathematical elegance. We do not know the underlying principles that guarantee its success. Let alone to interpret or pertinently strengthen its generalisation ability. We are interested in analysing error bounds, e.g., generalisation error bound and excess risk bound, by measuring the complexity of the predefined (or algorithmic) hypothesis class. An algorithmic hypothesis class is a subset of the predefined hypothesis class that a learning algorithm will (or is likely to) output. </p>

                    <b>Relevant Work/Publications:</b><br/>
                    <ol>
                      <li>The relationship between algorithmic stability and algorithmic hypothesis complexity [<a href='http://proceedings.mlr.press/v70/liu17c/liu17c.pdf'>ICML’17</a>]</li>
                      <li>Control batch size and learning rate to generalize well [<a href='https://papers.nips.cc/paper/2019/file/dc6a70712a252123c40d2adba6a11d84-Paper.pdf'>NeurIPS’19</a>]</li>
                      <li>Understanding the generalisation of ResNet [<a href='https://arxiv.org/abs/1904.01367'>TNNLS’20</a>]</li>
                      <li>Understanding the generalisation of orthogonal deep neural networks [<a href='https://arxiv.org/abs/1905.05929'>TPAMI’accepted</a>]</li>
            <li>Understanding the generalisation of multi-task learning [<a href='https://ieeexplore.ieee.org/document/7437460'>TPAMI’17</a>]</li>
                      <li>Understanding how feature structure transfers in transfer learning [<a href='https://www.ijcai.org/Proceedings/2017/0329.pdf'>IJCAI’17</a>]</li>
                      <li>Understanding the generalisation of non-negative matrix factorisation [<a href='https://arxiv.org/pdf/1601.00238.pdf'>NECO’16</a>, <a href='https://ieeexplore.ieee.org/document/7192641'>TNNLS’16</a>, <a href='https://ieeexplore.ieee.org/document/7492255'>TNNLS’17</a>]</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>


        );

    }
}

export default Topics;

