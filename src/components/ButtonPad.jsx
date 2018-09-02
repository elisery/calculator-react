import React from "react";
import Button from "./Button";

const ButtonPad = props => {
  const { onButtonDisplayClick = () => {} } = props;
  const buttonValues = {
    firstRow: ['AC', 'CE', '/', '*'],
    secondRow:[7, 8, 9, '-'],
    thirdRow: [4, 5, 6, '+'],
    fourthRow:[1, 2, 3],
    fifthRow: [0, '.'],
    sixthRow: ['=']
  }
  const redButton = "value inside-border red";
  const beigeButton = "value inside-border beige";
  const operatorButton = "operator";
  const numberButtton = "number";
  return(
    <div className="buttons">
      <div className="row">
        <div className="first-row">
          <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.firstRow[0]} styleProp={redButton} />
        </div>
        <div className="first-row">
          <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.firstRow[1]} styleProp={redButton} />
        </div>
        <div className="first-row">
          <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.firstRow[2]} styleProp={beigeButton} buttonType={operatorButton} />
        </div>
        <div className="first-row">
          <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.firstRow[3]} styleProp={beigeButton} buttonType={operatorButton} />
        </div>
      </div>
      <div className="row">
        <div className="second-row">
          <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.secondRow[0]} styleProp={beigeButton} buttonType={numberButtton}/>
        </div>
        <div className="second-row">
          <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.secondRow[1]} styleProp={beigeButton} buttonType={numberButtton}/>
        </div>
        <div className="second-row">
          <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.secondRow[2]} styleProp={beigeButton} buttonType={numberButtton}/>
        </div>
        <div className="second-row">
          <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.secondRow[3]} styleProp={beigeButton} buttonType={operatorButton}/>
        </div>
      </div>
      <div className="row">
        <div className="third-row">
          <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.thirdRow[0]} styleProp={beigeButton} buttonType={numberButtton}/>
        </div>
        <div className="third-row">
          <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.thirdRow[1]} styleProp={beigeButton} buttonType={numberButtton}/>
        </div>
        <div className="third-row">
          <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.thirdRow[2]} styleProp={beigeButton} buttonType={numberButtton}/>
        </div>
        <div className="third-row">
          <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.thirdRow[3]} styleProp={beigeButton} buttonType={operatorButton}/>
        </div>
      </div>
      <div className="bottom-buttons">
        <div className="two-rows">
          <div className="short-rows">
            <div className="short-buttons">
              <div className="fourth-row">
                <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.fourthRow[0]} styleProp={beigeButton} buttonType={numberButtton}/>
              </div>
              <div className="fourth-row">
                <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.fourthRow[1]} styleProp={beigeButton} buttonType={numberButtton}/>
              </div>
              <div className="fourth-row">
                <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.fourthRow[2]} styleProp={beigeButton} buttonType={numberButtton}/>
              </div>
            </div>
            <div className="short-buttons">
              <div className="fifth-row">
                <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.fifthRow[0]} styleProp={"value inside-border beige long-horiz number"} buttonType={numberButtton}/>
              </div>
              <div className="fifth-row">
                <Button onDisplayClick={onButtonDisplayClick} val={buttonValues.fifthRow[1]} styleProp={beigeButton}/>
              </div>
            </div>
          </div>
          <div className="equals">
            <Button val={buttonValues.sixthRow[0]} styleProp={"value inside-border grey long-vertical"} />
          </div>  
        </div>

      </div>
    </div> 
  )

}

export default ButtonPad;