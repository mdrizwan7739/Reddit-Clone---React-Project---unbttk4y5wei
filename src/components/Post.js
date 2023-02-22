import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import "./Post.css";

function Post(props) {
    let num1 = props.up;
    let num2 = props.down;
    const [upvalue, setUpValue] = useState(num1);
    const [downvalue, setDownValue] = useState(num2);
    const [boolean, setBoolean] = useState(false);
    const [boolean1, setBoolean1] = useState(false);

    const handleup = () => {
        setUpValue(num1 + 1)
        setBoolean(true);
    }
    const handledown = () => {
        setDownValue(num2 + 1)
        setBoolean1(true);
    }

    return (
        <>
            <div className="contain">
                <div className="up">
                    <div className="upchild">
                        <Button disabled={!localStorage.getItem("username") || boolean} className='upbtn' variant="primary" onClick={handleup} > <BiUpArrowAlt /></Button>
                        <span className='upspan'>{upvalue}</span>
                    </div>
                </div>
                <div className="down">
                    <div className="downchild">
                        <Button disabled={!localStorage.getItem("username") || boolean1} className='downbtn' variant="warning" onClick={handledown} > <BiDownArrowAlt /> </Button>
                        <span className='downspan'>{downvalue}</span>
                    </div>
                </div>
                <div className="para">{props.para}</div>
            </div>
        </>
    )
}

export default Post
