import React from 'react';
import Avatar from './Avatar';
import Info  from './Info';
// import Img from './Images/img_1.jpg';
function Card(props){    
    return(
        <div className='Cards'>
          <div className='Card'>
            <div className='top'>
               <h2>{props.name}</h2>
               <h2>{props.key}</h2>
               <Avatar 
               img ={props.img}
               />
            </div>
            <div className='bottom'>
              <Info 
                mail = {props.mail}
                num = {props.num}
              />
              
            </div>
          </div>
        </div>
    );
}
export default Card;