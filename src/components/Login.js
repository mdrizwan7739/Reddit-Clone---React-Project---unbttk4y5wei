import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [value, setValue] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handle = () => {
        if (value && password) {
            localStorage.setItem("username", value);
            localStorage.setItem("password", password);
            setPassword("");
            setValue("");
            navigate("/");
        }
    }
    return (
        <div>
            <div className="log">
                <input className='email' placeholder='email' type="text" value={value} onChange={e => setValue(e.target.value)} />
                <input className='password' placeholder='password' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <Button className='submit' onClick={handle}>Submit</Button>
            </div>
        </div>
    )
}

export default Login
