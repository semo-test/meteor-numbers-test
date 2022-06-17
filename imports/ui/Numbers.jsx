import React, { useState } from 'react';

export const Numbers = () => {
  const [numFrom, setNumFrom] = useState(1);
  const [numTill, setNumTill] = useState(100);

  const setNumFromHelper = (event)=>setNumFrom(parseInt(event.target.value))
  const setNumTillHelper = (event)=>setNumTill(parseInt(event.target.value))
  const exec = (func) => {return func();};
  return (
    <div>
      <span>from <input value={numFrom} onChange={setNumFromHelper} type="number" /></span>
      &nbsp;&nbsp;&nbsp; 
      <span>till <input value={numTill} onChange={setNumTillHelper} type="number" /></span>
      <br/><br/>
      {numFrom} {numTill}
      <hr/>
      <div>
      {
        exec(()=> {
                    const list = [];
                    for(let i = numFrom; i < numTill + 1 ; i++){
                      list.push(
                          <div> {i + " - "}   
                            { i % 15 === 0 ?   "RobotICT" 
                               : i % 5 === 0 ? "ICT" 
                               : i % 3 === 0 ? "Robot" : ""
                          } 
                        </div> 
                      );
                    }
                    return list;
                  }
            )
      }
      </div>
    </div>
  );
};