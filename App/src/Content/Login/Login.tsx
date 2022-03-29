import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { userLogin } from "../../redux/actions/UserAction";
import { postUsersPromise } from "../../redux/actions/PostAction";


import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


import axios from 'axios';



export default function Login() {
    const dispatch = useDispatch();

    const [id, setId] = useState("test1");
    const [password, setPassword] = useState("1234");
    const [token, setToken] = useState("");

    // const getUserToken = useCallback(() => {
    //     setToken(dispatch(postUsersPromise('/api/signin/',{
    //         id: id,
    //         password: password
    //     }))); // redux-promise 방법
    // }, [dispatch]);
    async function postData() {
        try {
            //응답 성공 
            await axios.post('/api/signin/', {
                //보내고자 하는 데이터 
                username: id,
                password: password
            }).then(function (response) {
                console.log(response)              
                let tk = response.data.datas[0].token;    
                dispatch(userLogin(tk));
                // if (!tk) {
                //     dispatch(userLogin(tk));
                // }
            });            
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("post")
        postData();

        // getUserToken()
        if (!token) {
            // dispatch(userLogin());
        }
    }
    function validateForm() {
        return id.length > 0 && password.length > 0;
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                        autoFocus
                        type="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    )
}
