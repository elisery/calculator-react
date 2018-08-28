import React from "react";

const Display = props => {
  const { mainValue } = props;
  return(
    <div className="display inside-border">
      <input type="text" className="main" maxLength="21" value={mainValue} />
      <input type="text" className="calculations" maxLength="21"/>
    </div>
  )
  
}

export default Display;