import React from 'react';
import { Link } from 'react-router-dom';
const Project2 = ({items}) => {
  
  return <div className="section_center">
  {items.map((menuItem) => {
    const {id,title,img,desc,url} = menuItem;
    console.log(url)
    return <articlee key={id} className="menu-itemm">
      <img className='photoo' src={img} alt={title} />
      <div className="item-infoo">
        <header>
          <h4>{title}</h4>
          
          <Link to={{ pathname: url }}
           target="_blank" >
             <h5 className="price">Link</h5>
           </Link>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </articlee>
  })}
</div>;
};

export default Project2;
