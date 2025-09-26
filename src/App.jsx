import { useState } from "react";
import Dashboard from "./Dashboard";
function Register({onRegister}){
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    function handleSubmit(event){
        event.preventDefault()
        localStorage.setItem("name",name)
        localStorage.setItem("user",JSON.stringify({email,password}))
        alert("Registration is successful")
        onRegister();
    


    }


    return(
        <div className="container">
            <div className="register">
            <h2>Regester Your Account</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" value={name} required onChange={(e)=> setName(e.target.value)}/>
            <input type="email" placeholder="Your Email" value={email} required onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder="Your Password" value={password} required onChange={(e)=> setPassword(e.target.value)}/>
            <button type="submit">Regester</button>
        </form>
        <div className="haveAccount">
            <p>have Account already</p>
            <button className="loginBtn" onClick={onRegister}>Login</button>
        </div>
        </div>
        </div>
    )
}


// login
function Login({onLogin,dashboard}){
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [error,setError] = useState ("");

    function handleSubmit(event){
        event.preventDefault()
        const mySavedUser = JSON.parse(localStorage.getItem("user"))
        if(!mySavedUser ||email !== mySavedUser.email || password !== mySavedUser.password){
            setError("Please Make Sure Your Password Or The Email")
            
        }
        else{
            dashboard()
        }
    


    }


    return(
        <div className="container">
            <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <input style={{marginBottom:10}} type="email" placeholder="Your Email" value={email} required onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder="Your Password" value={password} required onChange={(e)=> setPassword(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
        <div className="haveAccount">
            <p>Don't have account</p>
            <button className="loginBtn" onClick={onLogin}>regester</button>
        </div>
            <p className="errorPass">{error}</p>
        </div>
        </div>
    )

}










// chanaging and rendering pages

function App(){
    const [pages,setPages] = useState("register");
    return(
        <>
        {pages === "register" && (<Register onRegister={()=> setPages("login")}/>)}
        {pages === "login" && (<Login
         onLogin={()=> setPages("register")}
         dashboard={()=> setPages("dashboard")}
         />)}
        {pages === "dashboard" && (<Dashboard
        logout={()=> setPages("login")}/>)}
        
        </>
    )
}
export default App;