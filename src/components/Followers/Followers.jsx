import React from 'react';
import {FiUsers} from "react-icons/fi"

function Followers() {
  return (
    <div  className='text-center mt-5'>
      <FiUsers fontSize="30px" color='#8b949e'/>
      <p style={{fontSize:"25px", color:"#8b949e"}}>You don’t have any followers yet.</p>
     <div className='d-flex justify-content-center gap-2'>
      <span style={{color:"blue", cursor:"pointer"}}>Learen more</span>
      <p> about being social on GitHub.</p>
     </div>
    </div>
  );
}

export default Followers;