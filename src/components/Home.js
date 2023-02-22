import React, { useEffect, useState } from 'react'
import "../styles/Home.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Post from './Post';
import { useNavigate } from 'react-router-dom';


function Home() {

    const [modalInput, setModalInput] = useState("");
    const [items, setItems] = useState([]);
    const [val, setVal] = useState("");
    const [show, setShow] = useState(false);

    var posts1 = [];
    var post1 = {
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sint.",
        upVotes: 4,
        downVotes: 2
    }
    posts1.push(post1);
    localStorage.setItem("posts1", JSON.stringify(posts1));
    const navigate = useNavigate();
    const handleLogin = () => {

        navigate("/login");

    }

    const handleClose = () => setShow(false);
    const handleSave = () => {
        if (!modalInput) { }
        else {
            setItems([...items, modalInput]);
            setVal(modalInput);
            setModalInput("");
        }
        addPost();
        setShow(false);
    }

    const handleShow = () => setShow(true);
    const addPost = () => {
        if (val) {
            const posts = JSON.parse(localStorage.getItem("posts") || "[]");
            const post = {
                postText: val,
                upVotes: 0,
                downVotes: 0
            }
            posts.push(post);
            localStorage.setItem("posts", JSON.stringify(posts));
        }
    }
    useEffect(() => {
        setVal(modalInput);
        // eslint-disable-next-line
    }, [modalInput]);

    return (
        <>
            <div className="head">
                <img className='img' src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png" alt="redditImage" />
                <Button disabled={!localStorage.getItem("username")} className='post' variant="primary" onClick={handleShow}>
                    Add new post
                </Button>
                <Button disabled={localStorage.getItem("username")} className='login' variant="primary" onClick={handleLogin}  >Login</Button>
            </div>
            <Modal show={show} onHide={handleClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new post</Modal.Title>
                </Modal.Header>
                <Modal.Body><input value={modalInput} onChange={e => setModalInput(e.target.value)} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
           
            <Post para={JSON.parse(localStorage.getItem("posts1"))[0].postText} up={JSON.parse(localStorage.getItem("posts1"))[0].upVotes}
                down={JSON.parse(localStorage.getItem("posts1"))[0].downVotes} />
           
            {
                JSON.parse(localStorage.getItem("posts")) && JSON.parse(localStorage.getItem("posts")).map((e, ind) => {
                    return (
                        <Post para={e.postText} up={e.upVotes} down={e.downVotes} />

                    )
                })
            }



        </>
    )
}

export default Home
