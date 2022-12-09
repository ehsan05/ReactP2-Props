import React from 'react';
// import Img from './Images/img_1.jpg';
function Card(props){    
    return(
        <div className='Cards'>
          <div className='Card'>
            <div className='top'>
               <h2>{props.name}</h2>
               <img src={props.img}alt='Wait!'/>
            </div>
            <div className='bottom'>
              <p>{props.mail}</p>
              <p>{props.num}</p>
            </div>
          </div>
        </div>
    );
}
export default Card;