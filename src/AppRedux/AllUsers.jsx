import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
    background-color: green;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: darkgreen;
    }
`;

const AllUsers = () => {

    const DataUserState = useSelector(state => state.dataUsers)

    const navigate = useNavigate();

    const handleForget =(e)=>{
        e.preventDefault()
        navigate('/forgetPass')
    }

    return <>
        <h1>All User</h1>
        <ul>
            {
                DataUserState.map((item, index) => (
                    <li key={index}>
                      {item.email} <Btn onClick={handleForget}>Forget Password</Btn>
                      <br />
                    </li>
                  ))
            }
        </ul>
    </>
}

export default AllUsers;