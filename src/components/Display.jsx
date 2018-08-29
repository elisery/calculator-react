import React from "react";

const Display = props => {
  const { mainValue } = props;
  const mainDisplayVal = mainValue.join('');
  return(
    <div className="display inside-border">
      <input type="text" className="main" maxLength="21" value={mainDisplayVal} />
      <input type="text" className="calculations" maxLength="21"/>
    </div>
  )
  
}

export default Display;