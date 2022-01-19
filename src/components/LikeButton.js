import { useState } from 'react'



function Likebutton() {

    // create states  
    const [text, setText] = useState([])
    const [button, setButton] = useState(["Like"])
    // create toggle for button and like text
    const toggle = () => {
        text === "" ? setText("You liked this photo") : setText("")

        button === "Like" ? setButton("Unlike") : setButton("Like")
    }
    return (
        <div id="likeButtonDiv">
            <button id="buttonStyle" onClick={toggle}>{button}</button>
            <div id="likeText">{text}</div>
        </div>
    );
}

export default Likebutton;
