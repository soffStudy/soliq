import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import { FormWrapper } from './../../styleW/formWrap';
import { AiOutlineRadiusUpright } from 'react-icons/ai';

const Form = ({ Login, error }) => {
    const [details, setDetails] = useState({ name: "", email: "", password: "", role: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
        console.log(e.target.value);
    }

    // bu yerda malumotlar kiritiladi va tekshiriladi. Agar togri bolsa yozilgan page ga otadi, notogri bolsa otmaydi



    return (
        <FormWrapper>
            <div className="row mt-3">
                <div className="col-6 ofset-3">
                    <form onSubmit={submitHandler}>
                        <div className="form-inner">

                            <div className="nature">
                                <img src="soliq.jpg" alt="" className='nature_img' />
                            </div>
                            <div className="login_otish">
                                <h2>Ro'yhatdan o'tish</h2>
                            </div>
                            <div className="radio_button">
                                <input type="radio" value="user" name="radio" onChange={(e) => setDetails({ admin: e.target.value })} />
                                <label className="text-secondary ms-2">Users</label>
                                <input type="radio" value="admin" name="radio" onChange={(e) => setDetails({ admin: e.target.value })} />
                                <label className="text-secondary ms-2">Admin</label>
                            </div>
                            <div className="text-danger">
                                {(error != "") ? (<div className="error">{error}</div>) : ""}
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