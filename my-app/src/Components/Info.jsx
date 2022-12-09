import React  from "react";
function Info(props){
    return(
        <div>
        <p>{props.mail}</p>
        <p>{props.num}</p>
        </div>
        
    );
}

export default Info;