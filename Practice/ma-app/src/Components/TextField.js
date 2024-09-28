import React, { useState } from 'react';

export default function TextField() {
  
  const[text,setText]=useState();

  const handleConvertClick=()=>
  {
    let newText;

    newText=text.toUpperCase();

    setText(newText);

  };

  const handleOnChange=(event)=>
  {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Convert To Upper Case
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            placeholder='Enter Text'
            onChange={handleOnChange}
          ></textarea>
        </div>
          <div className="btn btn-primary" onClick={handleConvertClick} >Convert</div>
      </div>
    </>
  );
}
