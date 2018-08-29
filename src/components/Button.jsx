import React from "react";

const Button = props => {
  const { onDisplayClick = () => {} } = props;
  const { styleProp, val } = props;  

  return(
    <button onClick={() => onDisplayClick(val)} className={styleProp}>{val}</button>
  )

}

export default Button;