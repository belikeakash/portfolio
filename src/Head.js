import React from "react";
import sample from "./videos/bird.mp4";
import "./Head.css";
import {FaGithub} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {Link} from "react-router-dom"


function Head() {
  return (
    <div className="App">
      <div className="header">
        <div className="header_name">
          <div className="header_name_h1">
            Hi, <span>I'm Akash</span>
          </div>
          <div className="header_name_info">
            Bring your idea to life with my help{" "}
          </div>
          <div className="header-more-info">
            Multidisciplinary developer who makes and occasionally breaks
            things.
          </div>
          <div className='icons-center'>
          <Link to={{ pathname: "https://github.com/belikeakash" }} target="_blank" >

            <FaGithub className='yoo' />
            </Link>
            <Link to={{ pathname: "https://www.linkedin.com/in/akash-sirohi-676b30202/" }} target="_blank" >
            <AiFillLinkedin className='yoo' />
            </Link>
            <Link to={{ pathname: "https://www.facebook.com/profile.php?id=100027177756958" }} target="_blank" >
            <AiFillInstagram className='yoo' />
            </Link>
            
          </div>
          
        </div>
        
        
        <video className="videoTag" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Head;
