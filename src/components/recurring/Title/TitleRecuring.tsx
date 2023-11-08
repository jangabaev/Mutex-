import React from 'react'

import "./titlerecuring.css"

interface ITitle{
  text:string,
  img:any,
  ptext?:string
}
const TitleRecuring:React.FC<ITitle> = ({text,img,ptext}) => {
  return (
    <section className='homeItem'>
        <img data-speed=".6" src={img} alt="" />
        <div className="homeItem__text">
          <h1>{text}</h1>
          {ptext?<p>{ptext}</p>:""}
          <div className="homeItem__border"></div>
          
        </div>
    </section>
  )
}

export default TitleRecuring