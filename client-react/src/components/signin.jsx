import React from 'react';
import {useNavigate} from 'react-router-dom'

const SignIn =() =>{
    const [email,setEmail]= React.useState('');
    const [password,setPassword]= React.useState('');
    const navigate = useNavigate();
    const handleLogin= async() => {
        console.log(email,password);
        let result = await fetch("http://localhost:5000/api/login",{
            method : 'post',
            body : JSON.stringify({email, password}),
            headers: {
                'content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result)
        if(result.email)
        {
            localStorage.setItem('user', JSON.stringify(result));
            localStorage.setItem("isAdmin", (result.isAdmin));
            console.log('Admin status :',result.isAdmin)
            localStorage.setItem("login", true);
            navigate("/")
        } else {
            alert("Please enter correct credaintials")
        }
    }

    return(
        <div className='login' style={{marginLeft : "30%" , marginTop : "100px"}}>
            <h1>Login</h1>
            <input type="text" placeholder='Enter Email Here' 
                style={{padding : "7px", display : "block", border : "solid 1px", width : "300px", margin : "20px"}}
                onChange={(e) => setEmail(e.target.value) } value = {email}
            />
            <input type="password" placeholder='Enter Password Here'
                style={{padding : "7px", display : "block", border : "solid 1px", width : "300px", margin : "20px"}}
                onChange={(e) => setPassword(e.target.value)} value = {password}
            />
            <button onClick={handleLogin} type="button" 
                style={{margin : "20px", width : "150px", padding : "10px", backgroundColor: "skyblue", border: "solid 1px", cursor: "pointer"}}>
                Login
            </button>
        </div>
    )
}

export default SignIn;