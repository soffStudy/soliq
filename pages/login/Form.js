import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import { FormWrapper } from './../../styleW/formWrap';
import Logo from './../../public/soliq2.png'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

const Form = ({ Login, errorr }) => {
    const [details, setDetails] = useState({ name: "", email: "", password: "", role: "" });

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
      };

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
        console.log(e.target.value);
        

        e.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
    }

    return (
        <FormWrapper>
            <div className="row mt-3">
                <div className="col-6 ofset-3">
                <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <div className="nature">
                    <Image src={Logo} alt="" className='nature_img' />
                    </div>
                    <div className="login_otish">
                        <h2>Ro'yhatdan o'tish</h2>
                    </div>
                    <FormControl component="fieldset" className="formControl">
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={value} onChange={handleRadioChange}>
                            <FormControlLabel value="user" control={<Radio />} label="Users" onChange={(e) => setDetails({ user: e.target.value })} />
                            <FormControlLabel value="admin" control={<Radio />} label="Admin" onChange={(e) => setDetails({ user: e.target.value })}/>
                        </RadioGroup>
                        <FormHelperText className="helper">{helperText}</FormHelperText>
                    </FormControl>
                    <div className="text-danger">
                        {(errorr != "") ? (<div className="error">{errorr}</div>) : ""}
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Ism: </label> 
                        <input type="text" name="name" id="name" className="fjf" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} onClick={console.log(details.name)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Elektron pochta: </label>
                        <input type="email" name="email" id="email" className="fjf" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} onClick={console.log(details.email)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Parol: </label>
                        <input type="password" name="password" id="password" className="fjf" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <div className="submits">
                        <input type="submit" value="Kirish" className="fjf" />
                    </div>

                </div>
            </form>
                </div>
            </div>
        </FormWrapper>
    )
}

export default Form;