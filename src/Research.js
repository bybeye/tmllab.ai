// import './Team.css';
import React from 'react';
import HeadWhite from './HeadWhite';
import Banner from './Banner';
import Paper from './Paper';
import {Link} from "react-router-dom";
import Spacer from 'react-add-space';



function Research() {
    return (
	<div>
	    <HeadWhite />
	    <Banner title="PUBLICATIONS"/>
	    <div className="container justify-content-md-center">
	    <div className="row">
		<div className="col-md-3 col-12" style={{paddingBottom:"50px"}}>
		    <div className="row">
			<div className="col-md-12 col-5">
   			    <Link to="/Research" className="btn btn-outline-primary rounded-pill active">Publications</Link><br/><br/>
			</div>
			<div className="col-md-12 col-5">
			    <Link to="/Models" className="btn btn-outline-primary rounded-pill"><Spacer amount={3}/>Models<Spacer amount={3}/></Link><br/><br/>
			</div>
			<div className="col-md-12 col-5">
   			    <Link to="/Databases" className="btn btn-outline-primary rounded-pill"><Spacer amount={1}/>Databases<Spacer amount={2}/></Link><br/><br/>
			</div>
		    </div>
		</div>

		<div className="col-md-9 col-12">
		    <nav>
			<div className="nav nav-tabs" id="nav-tab" role="tablist">
			    <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Conference papers</a>
			    <a className="nav-link" id="nav-journal-tab" data-toggle="tab" href="#nav-journal" role="tab" aria-controls="nav-journal" aria-selected="false">Journal Papers</a>
			</div>
		    </nav>
		    <div className="tab-content" id="nav-tabContent">
			<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
			    <br/><br/>

			    <div className="row align-items-center">
				<h3 className="Head4">2020</h3>
			    </div>

			    <Paper title="Part-dependent Label Noise: Towards Instance-dependent Label Noise." authors="X. Xia, T. Liu, B. Han, N. Wang, M. Gong, H. Liu, G. Niu, D. Tao, and M. Sugiyama." pdf="https://arxiv.org/abs/2006.07836" conference="In NeurIPS, 2020." highlight="Spotlight"/>
			    <Paper title="Dual T: Reducing Estimation Error for Transition Matrix in Label-noise Learning." authors="Y. Yao, T. Liu, B. Han, M. Gong, J. Deng, G. Niu, and M. Sugiyama." pdf="https://arxiv.org/abs/2006.07805" conference="In NeurIPS, 2020."/>
			    <Paper title="Domain Generalization via Entropy Regularization." authors="S. Zhao, M. Gong, T. Liu, H. Fu, and D. Tao." conference="In NeurIPS, 2020."/>

			    <Paper title="Sub-center ArcFace: Boosting Face Recognition by Large-scale Noisy Web Faces." authors="J. Deng, J. Guo, T. Liu, M. Gong, and S Zafeiriou." conference="In ECCV, 2020."/>
			    <Paper title="Deep Heterogeneous Multi-Task Metric Learning for Visual Recognition and Retrieval." authors="S. Gan, Y. Luo, Y. Wen, T. Liu, and H. Hu." conference="In ACM MM, 2020."/>
			    <Paper title="Learning with Bounded Instance- and Label-dependent Label Noise." authors="J. Cheng, T. Liu, K. Rao, and D. Tao." conference="In ICML, 2020."/>
			    <Paper title="Label-Noise Robust Domain Adaptation." authors="X. Yu, T. Liu, M. Gong, K. Zhang, K. Batmanghelich, and D. Tao." conference="In ICML, 2020."/>
			    <Paper title="Dual-Path Distillation: A Unified Framework to Improve Black-Box Attacks." authors="Y. Zhang, Y. Li, T. Liu, and X. Tian." conference="In ICML, 2020."/>
			    <Paper title="LTF: A Label Transformation Framework for Correcting Label Shift." authors="J. Guo, M. Gong, T. Liu, K. Zhang, and D. Tao." conference="In ICML, 2020."/>
			    <Paper title="Generative-Discriminative Complementary Learning." authors="Y. Xu, M. Gong, J. Chen, T. Liu, K. Zhang, and K. Batmanghelich." conference="In AAAI, 2020." pdf="https://batman-lab.com/sites/default/files/AAAI_complementary_learning_v4.pdf"/>
			    <Paper title="Diversified Bayesian Nonnegative Matrix Factorization." authors="M. Qiao, J. Yu, T. Liu, X. Wang, and D. Tao." conference="In AAAI, 2020."/>


			    <br/><hr/><br/>
			    <div className="row align-items-center">
				<h3 className="Head4">2019</h3>
			    </div>
			    <Paper title="Are Anchor Points Really Indispensable in Label-Noise Learning?" authors="Xiaobo Xia, Tongliang Liu, Nannan Wang, Bo Han, Chen Gong, Gang Niu, and Masashi Sugiyama" pdf="https://arxiv.org/abs/1906.00189" code="https://github.com/xiaoboxia/T-Revision" project="https://github.com/xiaoboxia/T-Revision" conference="In NeurIPS, 2019."/>
			    <Paper title="Control Batch Size and Learning Rate to Generalize Well: Theoretical and Empirical Evidence." authors="F. He, T. Liu, and D. Tao" pdf="https://papers.nips.cc/paper/8398-control-batch-size-and-learning-rate-to-generalize-well-theoretical-and-empirical-evidence.pdf" conference="In NeurIPS, 2019."/>

			    <Paper title="DistillHash: Unsupervised Deep Hashing by Distilling Data Pairs. " authors="E. Yang, T. Liu, C. Deng, W. Liu, and D. Tao." conference="In CVPR, 2019." pdf="https://arxiv.org/pdf/1905.03465.pdf"/>
			    <Paper title="Skipping Two Layers in ResNet Makes the Generalization Gap Smaller than Skipping One or No Layer." authors="Y. Furusho, T. Liu, and K. Ikeda." conference="In INNSBDDL, 2019."/>
			    <Paper title="Positive and Unlabeled Learning with Label Disambiguation." authors="C. Zhang, D. Ren, T. Liu, J. Yang, and C. Gong." conference="In IJCAI, 2019." pdf="https://www.ijcai.org/Proceedings/2019/0590.pdf"/>
			    <Paper title="Towards Digital Retina in Smart Cities: A Model Generation, Utilization and Communication Paradigm." authors="Y. Lou, L. Duan, Y. Luo, Z. Chen, T. Liu, S. Wang, and W. Gao." conference="In ICME, 2019." pdf="https://arxiv.org/pdf/1907.13368.pdf" highlight="Best Paper Award"/>
			    
			    <br/><hr/><br/>
			    <div className="row align-items-center">
				<h3 className="Head4">2018</h3>
			    </div>
			    <Paper title="An Efficient and Provable Approach for Mixture Proportion Estimation Using Linear Independence Assumption." authors="X. Yu, T. Liu, M. Gong, K. Batmanghelich, and D. Tao." pdf="https://openaccess.thecvf.com/content_cvpr_2018/papers/Yu_An_Efficient_and_CVPR_2018_paper.pdf" conference="In CVPR, 2018."/>
			    
			    <Paper title="Learning with Biased Complementary Labels." authors="Xiyu Yu, Tongliang Liu, Mingming Gong, and Dacheng Tao" pdf="https://openaccess.thecvf.com/content_ECCV_2018/papers/Xiyu_Yu_Learning_with_Biased_ECCV_2018_paper.pdf" conference="In ECCV, 2018."/>

			    <Paper title="Correcting the Triplet Selection Bias for Triplet Loss. " authors="B. Yu, T. Liu, M. Gong, C. Ding, and D. Tao." pdf="https://openaccess.thecvf.com/content_ECCV_2018/papers/Baosheng_Yu_Correcting_the_Triplet_ECCV_2018_paper.pdf" conference="In ECCV, 2018."/>
			    
			    <Paper title="Deep Domain Generalization via Conditional Invariant Adversarial Networks. " authors="Y. Li, X. Tian, M. Gong, Y. Liu, T. Liu, K. Zhang, and D. Tao." pdf="https://openaccess.thecvf.com/content_ECCV_2018/papers/Ya_Li_Deep_Domain_Generalization_ECCV_2018_paper.pdf" conference="In ECCV, 2018."/>
			    
			    <Paper title="Quantum Divide-and-Conquer Anchoring for Separable Non-negative Matrix Factorization." authors="Y. Du, T. Liu, Y. Li, R. Duan, and D. Tao." pdf="https://www.ijcai.org/Proceedings/2018/0289.pdf" conference="In IJCAI, 2018."/>
			    
			    <Paper title="Online Heterogeneous Transfer Metric Learning." authors="Y. Luo, T. Liu, Y. Wen, and D. Tao." pdf="In IJCAI, 2018." conference="https://www.ijcai.org/Proceedings/2018/0350.pdf"/>
			    
			    <Paper title="Semantic Structure-based Unsupervised Deep Hashing. " authors="E. Yang, C. Deng, T. Liu, W. Liu, and D. Tao." pdf="E. Yang, C. Deng, T. Liu, W. Liu, and D. Tao." conference="In IJCAI, 2018."/>
			    
			    <Paper title="Domain Generalization via Conditional Invariant Representations." authors="Y. Li, M. Gong, X. Tian, T. Liu, and D. Tao." conference="In AAAI, 2018"/>
			    <Paper title="Robust Angular Local Descriptor Learning. " authors="Y. Xu, M. Gong, T. Liu, K. Batmanghelich, C. Wang." pdf="https://arxiv.org/abs/1901.07076" conference="In ACCV, 2018."/>

			    <br/><hr/><br/>
			    <div className="row align-items-center">
				<h3 className="Head4">2017</h3>
			    </div>
			    
			    <Paper title="Algorithmic Stability and Hypothesis Complexity." authors="T. Liu, G. Lugosi, G. Neu and D. Tao." pdf="http://proceedings.mlr.press/v70/liu17c/liu17c.pdf" conference="In ICML , 2017."/>
			    
			    <Paper title="On Compressing Deep Models by Low Rank and Sparse Decomposition. " authors="X. Yu, T. Liu, X. Wang, and D. Tao." pdf="https://openaccess.thecvf.com/content_cvpr_2017/papers/Yu_On_Compressing_Deep_CVPR_2017_paper.pdf" conference="In CVPR, 2017."/>
			    
			    <Paper title="Understanding How Feature Structure Transfers in Transfer Learning." authors="T. Liu, Q. Yang, and D. Tao." pdf="https://tongliang-liu.github.io/papers/IJCAI2017understanding.pdf" conference="In IJCAI, 2017."/>
			    
			    <Paper title="General Heterogeneous Transfer Distance Metric Learning via Knowledge Fragments Transfer." authors="Y. Luo, Y. Wen, T. Liu, and D. Tao." pdf="https://tongliang-liu.github.io/papers/IJCAI2017general.pdf" conference="In IJCAI, 2017."/>


			    <br/><hr/><br/>
			    <div className="row align-items-center">
				<h3 className="Head4">2016</h3>
			    </div>
			    
			    <Paper title="Domain Adaptation with Conditional Transferable Components." authors="M. Gong, K. Zhang, T. Liu, D. Tao, C. Glymour, and B. Schölkopf." pdf="http://proceedings.mlr.press/v48/gong16.pdf" conference="In ICML, 2106."/>
			    <Paper title="Diversified Dynamical Gaussian Process Latent Variable Model for Video Repair." authors="H. Xiong, T. Liu, and D. Tao." pdf="https://tongliang-liu.github.io/papers/AAAIVideoRepair.pdf" conference="In AAAI, 2016."/>
`
			    

			    <br/><hr/><br/>
			    <div className="row align-items-center">
				<h3 className="Head4">2015</h3>
			    </div>
			    <Paper title="Spectral Ensemble Clustering." authors="H. Liu, T. Liu, J. Wu, D. Tao, and Y. Fu." pdf="https://tongliang-liu.github.io/papers/KDDEnsembleClustering.pdf" conference="In KDD, 2015."/>
			    <Paper title="Multi-Task Model and Feature Joint Learning. " authors="Y. Li, X. Tian, T. Liu, and D. Tao." pdf="https://tongliang-liu.github.io/papers/IJCAIMultiTask.pdf" conference="In IJCAI, 2015." highlight="Best Paper Award candidate"/>
			    <Paper title="Learning Relative Features through Adaptive Pooling for Image Classification. " authors="M. Shao, S. Li, T. Liu, D. Tao, T. S. Huang, and Y. Fu." pdf="https://tongliang-liu.github.io/papers/ICMELearningFeatures.pdf" conference="In ICME, 2014."/>
			    <Paper title="On the Robustness and Generalization of Cauchy Regression." authors="T. Liu and D. Tao." pdf="https://tongliang-liu.github.io/papers/ICISTCauchyRegression.pdf" conference="In ICIST, 2014." highlight="Best Paper Award"/>
			</div>
			
			<div className="tab-pane fade" id="nav-journal" role="tabpanel" aria-labelledby="nav-journal-tab">
			    <br/><br/>

			    <Paper title="Heterogeneous Graph Attention Network for Unsupervised Multiple-Target Domain Adaptation." authors="X. Yang, C. Deng, T. Liu, and D. Tao." pdf="" conference="IEEE T-PAMI, accepted." highlight=""/>
			    <Paper title="Orthogonal Deep Neural Networks." authors="K. Jia, S. Li, Y. Wen, T. Liu, and D. Tao." pdf="" conference="IEEE T-PAMI, accepted." highlight=""/>
			    <Paper title="Loss Decomposition and Centroid Estimation for Positive and Unlabeled Learning." authors="C. Gong, H. Shi, T. Liu, C. Zhang, J. Yang, and D. Tao." pdf="" conference="IEEE T-PAMI, accepted." highlight=""/>
			    <Paper title="Why ResNet Works? Residuals Generalize." authors="F. He, T. Liu, and D. Tao." pdf="" conference="IEEE T-NNLS, Accepted." highlight=""/>
			    <Paper title="Label Propagated Nonnegative Matrix Factorization for Clustering." authors="L. Lan, T. Liu, X. Zhang, C. Xu, and Z. Luo." pdf="" conference="IEEE T-KDE, Accepted." highlight=""/>
			    <Paper title="Laplacian Welsch Regularization for Robust Semi-Supervised Learning." authors="J. Ke, C. Gong, T. Liu, L. Zhao, J. Yang, and D. Tao." pdf="" conference="IEEE T-CYB, Accepted." highlight=""/>
			    

			    <br/><hr/><br/>
			    <div className="row align-items-center">
				<h3 className="Head4">2020</h3>
			    </div>

			    <Paper title="Towards Efficient Front-end Visual Sensing for Digital Retina: A Model-Centric Paradigm." authors="Y. Lou, L. Duan, Y. Luo, Z. Chen, T. Liu, S. Wang, and W. Gao." conference="IEEE T-MM, 22(11): 3002-3013, 2020."/>
			    <Paper title="Harnessing Side Information for Classification under Label Noise." authors="Y. Wei, C. Gong, S. Chen, T. Liu, J. Yang, and D. Tao." pdf="" conference="IEEE T-NNLS, 31(9): 3178-3192, 2020." highlight=""/>
			    <Paper title="Group Feedback Capsule Network." authors="X. Ding, N Wang, X. Gao, J. Li, X. Wang, T. Liu." pdf="" conference="IEEE T-IP, 29: 6789-6799, 2020." highlight=""/>
			    <Paper title="Absent Multiple Kernel Learning Algorithms." authors="X. Liu, L. Wang, X. Zhu, M. Li, E. Zhu, T. Liu, L. Liu, Y. Dou, and J. Yin." pdf="https://tongliang-liu.github.io/papers/TPAMIAbsentKernel.pdf" conference="IEEE T-PAMI, 42(6): 1303-1316, 2020." highlight=""/>
			    <Paper title="Multiple Kernel k-means with Incomplete Kernels." authors="X. Liu, X. Zhu, M. Li, L. Wang, E. Zhu, T. Liu, M. Kloft, D. Shen, J. Yin, and W. Gao." pdf="https://tongliang-liu.github.io/papers/TPAMIK-means.pdf" conference="IEEE T-PAMI, 42(5): 1191-1204, 2020." highlight=""/>
			    <Paper title="Adversarial Examples for Hamming Space Search." authors="E. Yang, T. Liu, C. Deng, and D. Tao." pdf="https://tongliang-liu.github.io/papers/08573146.pdf" conference="IEEE T-CYB, 50(4): 1473-1484, 2020." highlight=""/>

			    <br/><hr/><br/>
			    <div className="row align-items-center">
				<h3 className="Head4">2019</h3>
			    </div>
			    <Paper title="Transferring Knowledge Fragments for Learning Distance Metric from A Heterogeneous Domain." authors="Y. Luo, Y. Wen, T. Liu, and D. Tao." pdf="" conference="IEEE T-PAMI, 41(4): 1013-1026, 2019." highlight=""/>
			    <Paper title="Truncated Cauchy Non-negative Matrix Factorization." authors="N. Guan, T. Liu, Y. Zhang, D. Tao, and L. S. Davis." pdf="https://tongliang-liu.github.io/papers/TPAMITruncatedNMF.pdf" conference="IEEE T-PAMI, 41(1): 246-259, 2019." highlight=""/>
			    <Paper title="Large-Margin Label-Calibrated Support Vector Machines for Positive and Unlabeled Learning." authors="C. Gong, T. Liu, J. Yang, and D. Tao." pdf="https://tongliang-liu.github.io/papers/08636540.pdf" conference="IEEE T-NNLS, 30(11): 3471-3483, 2019." highlight=""/>
			    <Paper title="Eigenfunction-Based Multitask Learning in a Reproducing Kernel Hilbert Space." authors="X. Tian, Y. Li, T. Liu, X. Wang, and D. Tao." pdf="https://tongliang-liu.github.io/papers/08513983.pdf" conference="IEEE T-NNLS, 30(6): 1818-1830, 2019." highlight=""/>
			    <Paper title="Adaptive Morphological Reconstruction for Seeded Image Segmentation." authors="T. Lei, X. Jia, T. Liu, S. Liu, H. Meng, and A. K. Nandi." pdf="https://tongliang-liu.github.io/papers/08733206.pdf" conference="IEEE T-IP, 28(11): 5510-5523, 2019." highlight=""/>
			    <Paper title="Unsupervised Semantic-Preserving Adversarial Hashing for Image Search." authors="C. Deng, E. Yang, T. Liu, J. Li, W. Liu, and D. Tao." pdf="https://tongliang-liu.github.io/papers/08666767.pdf" conference="IEEE T-IP, 28(8): 4032-4044, 2019." highlight=""/>

			    <br/><hr/><br/>
			    <div className="row align-items-center">
				<h3 className="Head4">2018</h3>
			    </div>
			    <Paper title="Fast Supervised Discrete Hashing. " authors="J. Gui, T. Liu, Z. Sun, D. Tao, and T. Tan." pdf="https://tongliang-liu.github.io/papers/TPAMI_Fastdhc.pdf" conference="IEEE T-PAMI, 40(2): 490-496, 2018." highlight=""/>
			    <Paper title="Continuous Dropout. " authors="X. Shen, X. Tian, F. Xu, T. Liu, and D. Tao." pdf="https://tongliang-liu.github.io/papers/08057594.pdf" conference="IEEE T-NNLS, 29(9): 3926-3937, 2018." highlight=""/>
<Paper title="Multi-class Learning with Partially Corrupted Labels." authors="R. Wang, T. Liu, and D. Tao." pdf="https://tongliang-liu.github.io/papers/07929355.pdf" conference="IEEE T-NNLS, 29(6): 2568-2580, 2018." highlight=""/>
<Paper title="On Better Exploring and Exploiting Task Relationship in Multi-Task Learning: Joint Model and Feature Learning." authors="Y. Li, X. Tian, T. Liu, and D. Tao." pdf="https://tongliang-liu.github.io/papers/07902220.pdf" conference="IEEE T-NNLS, 29(5): 1975-1985, 2018." highlight=""/>
<Paper title="Supervised Discrete Hashing with Relaxation." authors="J. Gui, T. Liu, Z. Sun, D. Tao, and T. Tan." pdf="https://tongliang-liu.github.io/papers/guiSupervised.pdf" conference="IEEE T-NNLS, 29(3): 608-617, 2018." highlight=""/>
<Paper title="Deep Blur Mapping: Exploiting High-Level Semantics by Deep Neural Networks." authors="K. Ma, H. Fu, T. Liu, Z. Wang, and D. Tao." pdf="https://tongliang-liu.github.io/papers/08386849.pdf" conference="IEEE T-IP, 27(10): 5155-5166, 2018." highlight=""/>
<Paper title="A Regularization Approach for Instance-Based Superset Label Learning." authors="C. Gong, T. Liu, Y. Tang, J. Yang, J. Yang, and D. Tao." pdf="https://tongliang-liu.github.io/papers/gongARegularization.pdf" conference="IEEE T-CYB, 48(3): 967-978, 2018." highlight=""/>
			    
			    <br/><hr/><br/>
			    <div className="row align-items-center">
				<h3 className="Head4">2017</h3>
			    </div>
			    <Paper title="Algorithm-Dependent Generalization Bounds for Multi-Task Learning." authors="T. Liu, D. Tao, M. Song, and S. J. Maybank." pdf="https://tongliang-liu.github.io/papers/TPAMIAlgorithmBounds.pdf" conference="IEEE T-PAMI, 39(2): 227-241, 2017." highlight=""/>
			    <Paper title="Large Cone Non-negative Matrix Factorization." authors="T. Liu, M. Gong, and D. Tao." pdf="https://tongliang-liu.github.io/papers/TNNLSLCNMF.pdf" conference="IEEE T-NNLS, 28(9): 2129-2141, 2017." highlight=""/>
			    <Paper title="dipIQ: Blind Image Quality Assessment by Learning-to-Rank Discriminable Image Pairs." authors="K. Ma, W. Liu, T. Liu, Z. Wang, and D. Tao." pdf="https://tongliang-liu.github.io/papers/TIPdipIQ.pdf" conference="IEEE T-IP, 26(8): 3951-3964, 2017." highlight=""/>
			    <Paper title="Elastic Net Hypergraph Learning for Image Clustering and Semi-supervised Classification." authors="Q. Liu, Y. Sun, C. Wang, T. Liu, and D. Tao." pdf="https://tongliang-liu.github.io/papers/ElasticNetHypergraph.pdf" conference="IEEE T-IP, 26(1): 452-463, 2017." highlight=""/>
			    <Paper title="Spectral Ensemble Clustering via Weighted K-means: Theoretical and Practical Evidence." authors="H. Liu, J. Wu, T. Liu, D. Tao, and Y. Fu." pdf="https://tongliang-liu.github.io/papers/07811216.pdf" conference="IEEE T-KDE, vol. 29, no. 5, pp. 1129-1143, 2017." highlight=""/>
			    <Paper title="Joint Sparse Representation and Multitask Learning for Hyperspectral Target Detection." authors="Y. Zhang, B. Du, L. Zhang, and T. Liu." pdf="https://tongliang-liu.github.io/papers/07769257.pdf" conference="IEEE T-GRS, 55(2): 894-906, 2017." highlight=""/>

			    <br/><hr/><br/>
			    <div className="row align-items-center">
				<h3 className="Head4">2016</h3>
			    </div>
			    
			    <Paper title="Classification with Noisy Labels by Importance Reweighting." authors="Tongliang Liu and Dacheng Tao" pdf="https://arxiv.org/pdf/1411.7718.pdf" conference="IEEE T-PAMI, 38(3): 447-461, 2016."/>
			    <Paper title="Dimensionality-Dependent Generalization Bounds for k-Dimensional Coding Schemes." authors="T. Liu, D. Tao, and D. Xu." pdf="https://arxiv.org/pdf/1601.00238.pdf" conference="NECO, 28(10): 2213-2249, 2016." highlight=""/>
			    <Paper title="On the Performance of MahNMF Manhattan Non-negative Matrix Factorization." authors="T. Liu and D. Tao." pdf="https://tongliang-liu.github.io/papers/TNNLSManhNMF.pdf" conference="IEEE T-NNLS, 27(9): 1851-1863, 2016." highlight=""/>
<Paper title="Dual Diversified Dynamical Gaussian Process Latent Variable Model for Video Repair." authors="H. Xiong, T. Liu, D. Tao, and H. T. Shen." pdf="https://tongliang-liu.github.io/papers/TIPvideorepair.pdf" conference="IEEE T-IP, 25(8): 3626-3637, 2016." highlight=""/>
<Paper title="Local Rademacher Complexity for Multi-Label Learning. " authors="C. Xu, T. Liu, D. Tao, and C. Xu." pdf="https://tongliang-liu.github.io/papers/TIPLocalRademacher.pdf" conference="IEEE T-IP, 25(3): 1495-1507, 2016." highlight=""/>
<Paper title="Representative Vector Machines: A Unified Framework for Classical Classifiers." authors="J. Gui, T. Liu, D. Tao, Z. Sun, and T. Tan." pdf="https://tongliang-liu.github.io/papers/TCYBRVM.pdf" conference="IEEE T-CYB, 46(8): 1877-1888, 2016." highlight=""/>
<Paper title="Video Face Editing Using Temporal-Spatial-Smooth Warping." authors="X. Li, T. Liu, J. Deng, and D. Tao." pdf="https://tongliang-liu.github.io/papers/ACMTISTFaceEditing.pdf" conference="ACM T-IST, 7(3): 32, 2016." highlight=""/>
 
			    <br/><hr/><br/>
			    <div className="row align-items-center">
				<h3 className="Head4">2015</h3>
			    </div>
			    <Paper title="Deformed Graph Laplacian for Semisupervised Learning." authors="C. Gong, T. Liu, D. Tao, K. Fu, E. Tu, and J. Yang." pdf="https://tongliang-liu.github.io/papers/TNNLSDeformedGraphLaplacian.pdf" conference="IEEE T-NNLS, 26(10): 2261-2274, 2015." highlight=""/>
<Paper title="Multiview Matrix Completion for Multilabel Image Classification." authors="Y. Luo, T. Liu, D. Tao, and C. Xu." pdf="https://tongliang-liu.github.io/papers/TIP-Multiview.pdf" conference="IEEE T-IP, 24(8): 2261-2274, 2015." highlight=""/>
<Paper title="No Reference Quality Assessment for Multiply-Distorted Images Based on an Improved Bag-of-Words Model." authors="Y. Lu, F. Xie, T. Liu, Z. Jiang, and D. Tao." pdf="https://tongliang-liu.github.io/papers/IEEESPLNoReferenceIQA.pdf" conference="IEEE SPL, 22(10): 1811-1815, 2015." highlight=""/>
			    

			    <br/><hr/><br/>
			    <div className="row align-items-center">
				<h3 className="Head4">2014</h3>
			    </div>
			    <Paper title="Decomposition-Based Transfer Distance Metric Learning for Image Classification." authors="Y. Luo, T. Liu, D. Tao, and C. Xu." pdf="https://tongliang-liu.github.io/papers/TIPMetricTransfer.pdf" conference="IEEE T-IP, 23(9): 3789-3801, 2014." highlight=""/>
			    <Paper title="" authors="" pdf="" conference="" highlight=""/>
			    <br/>
			</div>
		    </div>

		</div>
		
		</div>
	    </div>
	</div>
    );
}

export default Research;
