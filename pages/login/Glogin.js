import React, { useState } from 'react';
import { GloginW } from '../../styleW/GloginW';
import Form from './Form';
import { useRouter } from 'next/router';
import Menu from "../menu"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Glogin() {
  const router = useRouter();

  const adminUser = {
    email: "akromovibrohim7@gmail.com",
    password: "asdf"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [errorr, setErrorr] = useState("");

  const Login = details => {

    if (details.email == adminUser.email && details.password == adminUser.password) {
      // console.log("logged in");

      setUser({
        name: details.name,
        email: details.email
      })
      router.push({
        pathname: "menu",
        query: details.role
      })
      router.push("menu")
    } else {
      console.log("Ma'lumot topilmadi");

      // console.log(details);

      setErrorr("Error")
    }
  }

  // const Logout = () => {
  //   setUser({ name: "", email: "" })
  // }

  return (
    <GloginW >
      <div className="App">
        {(user.email != "") ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Form Login={Login} errorr={errorr} />
        )}
      </div>
    </GloginW>
  );

}

export default Glogin;