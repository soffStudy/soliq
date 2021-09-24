import React, { useState } from 'react';
import { GloginW } from '../../styleW/GloginW';
import Form from './Form';
import { useRouter } from 'next/router';

function Glogin() {
  const router = useRouter()

  const adminUser = {
    email: "akromovibrohim7@gmail.com",
    password: "asdf"
  }

  const[user, setUser] = useState({name: "", email: ""});
  const[error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("logged in");

      setUser({
        name: details.name,
        email: details.email
      })
      router.push({
          pathname: "table",
          query: details.role
      })
      router.push("table")
    }else {
      console.log("details topilmadi");
      
      console.log(details);

      setError("Error")
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" })
  }

  return (
    <GloginW >
        <div className="App">
            {(user.email != "") ? (
            <div className="welcome">
                <h2>Salom <span aria-activedescendant>{user.name}</span></h2>
                <button onClick={ Logout }>Logout</button>
            </div>
            ) : (
            <Form Login={Login} error={error}/>
            )}
        </div>
    </GloginW>
  );
  
}

export default Glogin;
