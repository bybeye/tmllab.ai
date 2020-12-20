import React, { useRef, useEffect } from 'react';
import clamp from 'lodash-es/clamp';
import { useSprings, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import pages from './newsData';
import './Swaper.css';

var timer_id;

function Swaper (){
    const swaperWidth = 1200;
    const index = useRef(0);
    
    const [props, set] = useSprings(pages.length, (i) => ({
        x: i * swaperWidth,
        scale: 1,
        display: 'block',
        color: 0 === i ?  "#0d6efd" : "#474747"
    }));


    // set timer
    useEffect(() => {
        timer_id = window.setInterval(change, 5000);
        return () => {
            window.clearInterval(timer_id);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // drag action
    const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {        
        // hide other blocks, except center and other three.
        if (active && distance > swaperWidth / 3)
            cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)));

        // for postion and animation
        set((i) => {
            if (i < index.current - 1 || i > index.current + 1)
                return { display: 'none' };
            const x = (i - index.current) * swaperWidth + (active ? mx : 0);
            const scale = active ? 1 - distance / swaperWidth / 2 : 1;
            const color = index.current === i ?  "#0d6efd" : "#474747";
            return { x, scale, display: 'block', color };
        });

    });


    const change = (() => {
        // hide other blocks, except center and other three.
        if(index.current + 1 < pages.length){
            index.current = index.current + 1;
        }else{
            index.current = 0;
        }

        // for postion and animation
        // alert("change invoke");
        set((i) => {
            //alert(index.current + ", " + i);
            const color = index.current === i ?  "#0d6efd" : "#474747";
            const x = (i - index.current) * swaperWidth;
            return { x, scale: 1, display: 'block', color};
        });
    });

    const bindSelect = ((radioIndex) => {
        // reset timer
        //alert(radioIndex);
        index.current = radioIndex;
        

        set((i) => {
            const color = index.current === i ?  "#0d6efd" : "#474747";
            const x = (i - index.current) * swaperWidth;
            return { x, scale: 1, display: 'block', color };
        });

        // reset timer
        window.clearInterval(timer_id);
        timer_id = window.setInterval(change, 5000);
    });
    
    return (
        <div id="swaper-outer">
          <div id="swaper">
            {
                props.map(({ x, display, scale, color }, i) => (
                    <animated.div {...bind()} key={i} style={{ display, x }}>
                      <animated.div style={{ scale }}>
                        <div className="row w-100 h-100 justify-content-center align-items-center nopadding">
			  <div className="col-12 col-xl-6 nopadding">
			    <div className="fl l-img">
			      <img src={pages[i].image_url} alt=""/>
			    </div>
			  </div>
			  
			  <div className="col-12 col-xl-6 nopadding" >
			    <div className="r-text">
			      <div className="r-inner-text">
		                {pages[i].title}<br/><br/><a href={pages[i].link} target="_blank" rel="noopener noreferrer">Read More &nbsp; &#9654;</a>
			      </div>
			    </div>
			  </div>
		        </div>
                      </animated.div>
                    </animated.div>
                ))
            }
          </div>
          <div id="swaper-selector">
            {
                props.map(({x, display, scale, color}, i) => (

                    <animated.svg width="30" height="30" viewBox="1 0 16 16" className="bi bi-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" key={i} onClick={() => bindSelect(i)} style={{color}}>
                      <circle cx="8" cy="8" r="4"/>
                    </animated.svg> 
                ))
            }
          </div>
        </div>
    );
}

export default Swaper;
