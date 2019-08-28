import React from "react";
import {Link }from 'react-router-dom';
const About = () => {
  return <div id="about">
  <div className="section-in">
      <li>Infront Webworks</li>
      <li>5350 Tomah Dr #2800 <br></br>
          Colorado Springs, CO <br></br>
          80918</li>
      <li><img src="../images/map.png" alt="Map"/></li>
      <li>
          <h1>Follow Us</h1>
          <div className="iconic">
              <span><i class="fab fa-facebook-square"></i></span>
              <span><i class="fab fa-twitter-square"></i></span>
              <span><i class="fab fa-invision"></i></span>
              <span><i class="fab fa-google-plus"></i></span>
          </div>
      </li>
  </div>
  <div className="section-in">
      <li>'Have Questions or Need Help?</li>
      <li>SALES: (719) 577-4404</li>
      <li>SUPPORT: (719) 359-5540</li>
      <li>BILLING: (719) 577-4404</li>
      <li>FAX: (719) 630-7073</li>
      <li className="spcl">
          <a href="#">Open a Support Ticket</a>
        
          <a href="#">Job Openings</a>
      </li>
  </div>
  <div className="section-in sec-p ">
      <li>WEB</li>
      <li>Web Design</li>
      <li>Development </li>
      <li>Ecommerce</li>
      <li>Cloud Services</li>
  </div>
  <div className="section-in sec-p">
      <li>DIGITAL MARKETING</li>
     <li><Link to="seo">SEO</Link></li>
      <li><Link to="sem">SEM</Link></li>
      <li>Social Media</li>
  </div>
  <div className="section-in sec-p">
      <li>CLOUD SERVICES</li>
      <li>Domain Registration</li>
      <li>Email Services</li>
      <li>Web Hosting</li>
  </div>
  <div className="src">
    <form action="">
<input type="text"/>
<button>Search</button>
</form>
<img src="../images/j.png" alt=""/>
  </div>
</div>
};

export default About;
