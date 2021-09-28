import styled from "styled-components";

export const FormWrapper = styled.div`
   

    .button {
        appearance: none;
        background: none;
        border: none;
        outline: none;
    }

    .fjf {
        appearance: none;
        background: none;
        border: none;
        outline: none;
    }

    form {
        display: block;
        position: relative;
    }


    /* form::after {
        content: '';
        display: block;
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        z-index: 1;
        background: rgb(2,0,36);
        border-radius: 10px;
        width: 500px;
    } */

    .form-inner {
        position: relative;
        display: block;
        background-color: #FFF;
        padding: 30px;
        z-index: 2;
        border-radius: 10px;
        border: 4px solid #223157;
        width: 500px;
        font-weight: bold;
        opacity: 0.9;
    }

    .form-inner{
        h2 {
        color: #888;
        font-size: 28px;
        font-weight: 500;
        margin-bottom: 30px;
        }

        .form-group {
        display: block;
        width: 100%;
        margin-bottom: 15px;
        margin-top: 20px;
                label {
                display: block;
                color: #666;
                font-size: 12px;
                margin-bottom: 5px;
                transition: 0.4s;
            }
           
        }
    }
    .form-inner .form-group:focus-within label {
        color: rgb(11, 11, 134);
    }

    form .form-inner .form-group input {
        display: block;
        width: 100%;
        padding: 10px 15px;
        background-color: #F8F8F8;
        border-radius: 8px;
        transition: 0.4s;
    }

    form .form-inner .form-group input:focus {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    }

    form .form-inner input[type="submit"] {
        display: block;
        padding: 10px 15px;
        border-radius: 8px;
        background-color: blue;
        background: linear-gradient(90deg, rgb(25, 14, 184)10%, rgb(6, 6, 114)80%);
        /* background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); */
        background-size: 200%;
        background-position: 0%;
        transition: 0.4s;
        color: #FFF;
        font-weight: 700;
        cursor: pointer;
    }

    form .form-inner input[type="submit"]:hover {
        background-position: 100%, 0%;
    }

    .nature_img {
        width: 40px;
        height: 40px !important;
    }

    .nature {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        height: 60px;
        img{
            height: 70px;
        }
    }

    .login_otish {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .radio_button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .radio_button>label {
        margin-right: 10px;
    }
    .submits{
        display: flex;
        align-items: center;
        justify-content: end;
    }
    /* .rasm{
        width: 100px;
        height: 100px;
        object-fit: cover;
    } */
   
`;