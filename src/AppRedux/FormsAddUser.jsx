import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Userdata } from './actions/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoUsers from './actions/actionstype';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 50px auto;
    padding: 30px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
`;

const Input = styled.input`
    margin-bottom: 20px;
    padding: 15px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s;
    &:focus {
        border-color: #007BFF;
        outline: none;
    }
`;

const SubmitButton = styled.input`
    padding: 15px;
    font-size: 16px;
    color: #fff;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0056b3;
    }
`;

const FormsAddUser = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [user , setUser] = useState({name : '' , email : '' , password : ''})

    const handleInput = (e) => {
        e.preventDefault()
        setUser({
            ...user ,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(InfoUsers([user]))
        setUser({name : '' , email : '' , password : ''})
        navigate('/AllUser')
    }

    return <>
        <FormWrapper onSubmit={handleSubmit}>
            <Input type="text" name="name" placeholder="Enter your name" onChange={handleInput} />
            <Input type="email" name="email" placeholder="Enter your E-mail" onChange={handleInput} />
            <Input type="password" name="password" placeholder="Enter your Password" onChange={handleInput} />
            <SubmitButton type="submit" value='Add User'/>
        </FormWrapper>
    </>;
}

export default FormsAddUser;
