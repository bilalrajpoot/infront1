import React from 'react';
import{Link} from 'react-router-dom';
const SubHeader = ()=>{
    return <div id="container">
        <div className="text">
        <span>
            <Link to="/">Home</Link>
                </span>
            <span>
            |
            </span>
            <span>Digital Marketing</span>
        </div>

        <div className="yellow">
            <a href="#"><span>Request a Quote</span> or   (719) 577.4404 </a>


        </div>
    
    
    
    
    </div>
}
export default SubHeader;