import React from "react"
import TextLoop from "react-text-loop";
import '../style/style.css'

const Text = () => {
  return (
    // <h1>I AM SILAS SILIKHE</h1>
    <h2 className='top' style={{ textAlign: "center"}}>
       <span className='titles'> I am Silas Silikhe <br></br></span>

     <TextLoop className='title' interval={900} mask={true}>
        <span>Web Designer</span>
        <span>Web Developer</span>
        <span>Web Reasercher</span>
        <span>BackEnd Developer</span>
      </TextLoop>{" "}

    </h2>
  );
}

export default Text
