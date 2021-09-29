import styled from "styled-components";

const Documents = styled.div`
    font-family: 'Times New Roman', Times, serif;
    padding: 0 20px 0 20px;
    .bayonnoma{
        padding: 10px;
        margin: 10px;
        box-shadow: -5px 5px 8px #747474;
        .iform{
            margin: 10px 30px;
            padding: 4px;
            border:1px solid gray;
        }
    }
    .topshiriqCard{
        min-width:150px;
        min-height: 100px;
        background: rgb(0,209,255);
        background: linear-gradient(321deg, rgba(0,209,255,1) 0%, rgba(0,0,255,1) 46%, rgba(0,82,255,1) 71%);
        color: black;
        width: 400px;
        height: 200px;
        box-shadow: 15px 15px 25px #00000078,
        -15px -15px 25px #FFFFFF26;;
        padding: 20px;
        border-radius: 15px;
        color: white;
    }

    .ff{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        a{
            text-decoration: none;
            font-size: 20px;
            color: white;
        }
    }
    .red{
        color: #FF0505;
        font-weight: bold;
    }
    .bayonnoma2{
        width: 70%;
    }

    .green{
        color: #09CF00;
        font-weight: bold;
    }
    .qaror{
        .qaror2{
            width: 400px;
        }
        border-bottom:1px solid black;
    }
    .NewWork{
        display: flex;
        justify-content: end;
        align-items: center;
        margin-top: 10px;
    }
  

    /* .custom-shape-divider-bottom-1632912464 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    background-color: red;
    }

    .custom-shape-divider-bottom-1632912464 svg {
        position: relative;
        display: block;
        width: calc(108% + 1.3px);
        height: 238px;
        transform: rotateY(180deg);
    }

    .custom-shape-divider-bottom-1632912464 .shape-fill {
        fill: #FFFFFF;
} */

`;

export default Documents