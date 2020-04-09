import React from 'react';
import { Progress } from 'reactstrap';
import '../style/style.css'
import { FaHtml5, FaCss3Alt,FaAngular, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

const Graph = (props) => {
  return (
    <div className='m-3 graphs'>
      <div className='d-flex'>
      <div className='p-1'>HTML5<FaHtml5/></div>
      <div className="graph">85%</div>
      </div>
      <Progress className='mb-3' value="85"/>
      <div className='d-flex'>
      <div className='p-1'>CSS <FaCss3Alt/></div>
      <div className="graph float-left">71%</div>
      </div>
      <Progress className='mb-3' value="71"/>
      <div className='d-flex'>
      <div>javScript <IoLogoJavascript/></div>
      <div className="graph float-left">87%</div>
      </div>
      <Progress className='mb-3' value="87"/>
      <div className='d-flex'>
      <div className='p-1'>React<FaReact/></div>
      <div className="graph">65%</div>
      </div>
      <Progress className='mb-3' value="65"/>
      <div className='d-flex'>
      <div>Angular<FaAngular/></div>
      <div className="graph">75%</div>
      </div>
      <Progress value="75"/>
    </div>
  );
};

export default Graph;