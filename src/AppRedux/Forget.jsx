import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const SubmitButton = styled(Input)`
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #0056b3;
  }
`;

const Forget = () => {

    const [email , setEmail] = useState('');

    const DataUsers = useSelector(state => state.dataUsers);

    const handleSubmit =(e)=>{
        e.preventDefault()
        const test = DataUsers.find((item) => item.email === email);
        if (test) {
            alert(test.password);
        }else{
            alert('User Not Found');
        }
        
    }

    return <>
        <FormContainer>
        <form onSubmit={handleSubmit}>
            <Input type="email" name="email" placeholder="Enter your E-mail" onChange={(e)=>(setEmail(e.target.value))}/>
            <SubmitButton type="submit" value='Check This Password' />
        </form>
        </FormContainer>
    </>;
}

export default Forget;
