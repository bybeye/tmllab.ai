import React from 'react';
import team_icon from './images/news-1.png';
import talk_icon from './images/news-2.png';
import grant_icon from './images/news-3.png';
import award_icon from './images/news-4.png';
import paper_icon from './images/news-5.png';
import service_icon from './images/news-6.png';
import './News.css';


class NewsItem extends React.Component{
    
    render() {
        let icon_out, link_out;
    
        if (this.props.type === "1") {
	    icon_out = (<img src={team_icon} className="new_icon" alt=""/>);
        }else if (this.props.type === "2") {
            icon_out = (<img src={talk_icon} className="new_icon" alt=""/>);
        }else if (this.props.type === "3") {
            icon_out = (<img src={grant_icon} className="new_icon" alt=""/>);
        }else if (this.props.type === "4") {
            icon_out = (<img src={award_icon} className="new_icon" alt=""/>);
        }else if (this.props.type === "5") {
            icon_out = (<img src={paper_icon} className="new_icon" alt=""/>);
        }else if (this.props.type === "6") {
            icon_out = (<img src={service_icon} className="new_icon" alt=""/>);
            // icon_out =(<div className="btn btn-outline-primary rounded-pill active">service</div>);
        }

        if (this.props.link) {
	    link_out = (<a href={this.props.link} target="_blank" rel="noopener noreferrer">[Link]</a>);
	}
    
        return (
             <div className="row news_item" style={{paddingLeft:"15px"}}>
	      <div>
                {icon_out} &nbsp;
	      </div>
	      <div className="col nopadding">
                {this.props.date}, {this.props.content} {link_out}
	      </div>
	    </div>


        );

    }

}


export default NewsItem;
