
import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick=()=>{
    console.log("UpperCase was clicked"); 
    //To convert first word upper case
  //   const arr = text.split(" ");
  //   for (var i = 0; i < arr.length; i++) {
  //     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  
  // }
    // let newsText= arr.join(" ");

    //to convert all words upper case.
    let newsText=text.toUpperCase();
    setText(newsText);
    props.showAlert("Text Converted to UpperCase","success");
  }

  const handleCopy=()=>{
    let text =document.getElementById('myBox');
    text.select();
    const m =navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been Copied", "success");
  }

  const handleOnChange=(event)=>{
    console.log("on Change");
    setText(event.target.value)

  }

  const handleRemoveSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Space between Characters", "success");

  }

  const handleClear=()=>{
      setText('');
      props.showAlert("Text Removed", "success");

  }
  const[text,setText]=useState("Enter text here");
  // text="my name is rahhul"// wrong way
  // setText("my name is rahul")// correct way to update the text varible

    return (
    <div>
        <div className="mb-3 container" style ={{color:props.mode==='dark'? 'white': '#042743'}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} style ={{backgroundColor:props.mode==='light'? 'white': 'grey', color:props.mode==='light'? '#042743': 'white'}}id="myBox" rows="8" onChange={handleOnChange} ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-3" onClick={handleRemoveSpace}>Remove Extra Spaces</button>

    <div className="container" style ={{color:props.mode==='dark'? 'white': '#042743'}}>
          <h1> You text summary</h1>
          <p>{text.length} characters & {text.split(/\s+/).filter(word => word !== "").length} words</p>
          <p>{text.split(/\s+/).filter(word => word !== "").length* 0.08} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0? text:"Entered text displayed here."}</p>
        </div>
    </div>
  )
}
