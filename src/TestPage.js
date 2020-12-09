import React from 'react';
import HeadWhite from './HeadWhite';
import Banner from './Banner';
import Swaper from './Swaper';
import './TestPage.css';


class TestPage extends React.Component{

    render(){
        return (
            <div>
              <HeadWhite />
	      <Banner title="TEST PAGE" />
              <div className="test-content">
                  <Swaper/>
              </div>
              <br/><br/>
            </div>
        );
    }
}

export default TestPage;
