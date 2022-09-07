import React , {useState} from 'react'
export default function TextForm(props) {
  const handleUp = ()=>{
    // console.log("button clicked" + text);
    const newText = text.toUpperCase();
    setText(newText)
  }
  const handleOn = (event)=>{
    // console.log("button chnaged");
    setText(event.target.value)
  }
  const clearInput = (event) =>{
    setText("");
  }
  const [text , setText ] = useState ('Enter Text Here');

  return (
  
  <><div className='container my-3'>
      <div className="mb-3">
        <h1>{props.heading}  </h1>
        <textarea className="form-control" value={text} onClick={clearInput}onChange={handleOn} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUp}>Convert to UpperCase</button>
    </div><div className='container'>
    <h2>Text Details</h2>
    <p>Total Words are : {text.split(" ").length} <br></br> Total Characters are : {text.length}</p>
    {/* // Estimatng time to read that pragraph */}
    <p>{0.008 * text.split(" ").length } Minutes : You must Read in this time period</p>
    { /* preview Section */}
    <h3>Preview</h3>
    <p>{text}</p>
      </div></>
  
  )
}

