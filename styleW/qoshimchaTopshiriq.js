import styled from "styled-components";

const QoshimchaTopshiriq = styled.div`
    font-family: 'Times New Roman', Times, serif;
    padding: 0 20px 0 20px;
    /* background: url(https://storage.kun.uz/source/6/CbSUmOR2CKJ3p7JgTTxCesLYT0UJiofF.jpg); */
    border-radius: 5px;
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
        background-color: #002a6998;
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
  

    .acha{
        display: flex;
        justify-content: center;
        align-items: center;
    }
   
    .Inform{
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 15px;
       margin-bottom: 10px;
       border-radius: 10px;
       box-shadow: 4px 5px 5px #575757;
       background-color: #002A69;
       width: 400px;
       height: 200px;
       &:hover{
           transition: 0.3s;
        box-shadow: 7px 8px 4px #575757;

       }
   
       .rasmShaxs{
           width: 70px;
           height: 70px;
           object-fit: cover;
           margin: 5px;
           border-radius: 50%;
       
       }
       .personInf{
           color: white;
           a{
               color: white;
               text-decoration: none;
               display: block;
           }
       }
   }
   font-family: 'Times New Roman', Times, serif;
    padding: 0 20px 0 20px;
    background: url(https://storage.kun.uz/source/6/CbSUmOR2CKJ3p7JgTTxCesLYT0UJiofF.jpg);
    border-radius: 5px;
`;

export default QoshimchaTopshiriq