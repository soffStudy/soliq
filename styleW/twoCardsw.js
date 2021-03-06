import styled from "styled-components";

const twocardsW = styled.div`
        /* background-image: url("https://pix10.agoda.net/geo/city/14617/1_14617_02.jpg?s=1920x822"); */
        background: url(logo_basic.gif);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: cover;
        border-radius: 5px;
        margin-top: 10px;
        padding: 10px;

    .twCards{
        width: 100% !important;
        min-height:100vh !important;
        background-color: rgba(255, 255, 255, 0.523);
        border-radius: 5px;
        margin-top: 0;
        padding-top: 0;
        box-shadow: 10px 10px 21px #00000078,
        -10px -10px 21px #FFFFFF26;;
        a{
            text-decoration: none;
            color: black;
        }

        .twleft{
            transition: 0.3s;
            padding: 20px;
            border-radius: 10px;
            color: rgba(6, 8, 85, 1);
            font-weight: bold;
            font-size: 20px !important;
            width: 400px;
            height:200px;
            object-fit: cover;
            box-shadow: 3px 4px 10px rgba(6, 8, 85, 1);
            /* background-color:  rgba(255, 255, 255, 0.573); */
            background: url('https://t3.ftcdn.net/jpg/03/11/03/00/240_F_311030098_cbvDyiN5eFvSKFAojtXdIofDdDXQRzGt.jpg');
            background-position: left center;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            position: relative;
            
           &:hover{
               box-shadow: 5px 6px 10px rgba(6, 8, 85,1);
               background: url('https://t3.ftcdn.net/jpg/03/11/03/00/240_F_311030098_cbvDyiN5eFvSKFAojtXdIofDdDXQRzGt.jpg');
               background-position: right center;
           }
         
        }
    }
    
    .documentwords{
        margin: 10px;
        padding: 10px;
        text-align: center;
        color: #060855;
        /* text-shadow: 1px 2px  rgba(6, 8, 85, 0.5); */
    }
    .btnKirish{
        border: 2px solid rgba(6, 8, 85, 1);
        border-radius: 15px;
        color: rgba(6, 8, 85, 1);
        font-weight: bold;
    }
   .soliqLogo{
       display: flex;
       justify-content: center;
       img{
           width: 170px;
           height: 170px;
           object-fit: cover;
       }
   }
   .Inform{
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 10px;
       margin-bottom: 10px;
       border-radius: 10px;
       box-shadow: 4px 5px 7px black;
       transition: 1s;
       width: 70%;

       &:hover{
           box-shadow: 6px 7px 20px black;
           /* transform: rotateX(10deg); */
           transform: translateY(-10px);
           background-image: linear-gradient( 135deg, #6B73FF 10%, #000DFF 100%);
       }
       background-image: linear-gradient(to right top, #2b64b9, #2f80ca, #459bd7, #64b5e3, #88cfee);
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
   .menuRightc{
       .dfg{
           margin: 10px;
           width: 50px;
           height: 50px;
           object-fit: cover;
       }
   }

   .dfg2{
           margin: 10px;
           width: 50px;
           height: 50px;
           object-fit: cover;
           border-radius: 20%;
       }
   .yashil{
    background-color: #8FFFA2;
   }

   .qizil{
    background-color: #FF8F8F;
   }
`;

export default twocardsW;