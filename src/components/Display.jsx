import React from "react";

const Display = props => {
  const { mainValue, opValue } = props;
  const operationsDisplay = opValue.concat(mainValue);
  const mainDisplayVal = mainValue.join('');
  return(
    <div className="display inside-border">
      <p className="main" maxLength="21">{mainDisplayVal}</p>
      <p className="calculations" maxLength="21">{operationsDisplay}</p>
    </div>
  )
  
}

export default Display;