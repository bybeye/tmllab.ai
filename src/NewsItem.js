import React from 'react';
import './News.css';
import new_icon from './images/new-icon.png';


class NewsItem extends React.Component{
    
    render() {
        let icon_out;
    
        if (this.props.newcome) {
	    icon_out = (<img src={new_icon} className="new_icon" alt=""/>);
        }
    
        return (
             <div className="row news_item" style={{paddingLeft:"20px"}}>
	      <div>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="7" r="4"/>
                  </svg>
	      </div>
	      <div className="col nopadding">
                  {icon_out} {this.props.date}, {this.props.content}
	      </div>
	    </div>


        );

    }

}


export default NewsItem;
