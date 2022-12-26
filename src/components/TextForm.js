import React, { useState } from 'react';

const TextForm = ({ mode, heading }) => {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const clearText = () => {
        setText('')
    }
    return (
        <>
            <div className='container' style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                <h1>{heading}</h1>
                <div className="mb-3">
                    <textarea
                        style={{ backgroundColor: mode === 'dark' ? 'grey' : 'white', color: mode === 'dark' ? 'white' : 'black' }}
                        className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy All Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear All Text</button>
            </div>
            <div className="container my-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something to textbox above to Preview it"}</p>
            </div>
        </>
    )
}

export default TextForm;