import React from "react";

const Display = props => {
  const { mainValue, opValue } = props;
  const operationsDisplay = opValue.concat(mainValue);
  const mainDisplayVal = mainValue.join('');
  return(
    <div className="display inside-border">
      {/* <input type="text" className="main" maxLength="21" value={mainDisplayVal} /> */}
      <p className="main" maxLength="21">{mainDisplayVal}</p>
      {/* <input type="text" className="calculations" maxLength="21"/> */}
      <p className="calculations" maxLength="21">{operationsDisplay}</p>
    </div>
  )
  
}

export default Display;