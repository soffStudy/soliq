import styled from "styled-components";

const Tables = styled.div`
    table{
        padding: 10px;
        border: 1px solid black;
        width: 100%;
        tr{
            .thColspan{
                width: 100%;
                min-height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        th{
            border: 1px solid black;
        }
        td{
            border: 1px solid black;
            text-align: center;
        }
        a{
            color: black;
            text-decoration: none;
        }
    }

    .menu{
        min-height: 80vh;
        width: 100% !important;
    }
    .twCards{
        width: 100% !important;
        background-image: url("https://pix10.agoda.net/geo/city/14617/1_14617_02.jpg?s=1920x822");
        background-repeat: no-repeat;
        background-position: right, bottom;
        background-size: cover;
        min-height:100vh !important;
        border-radius: 5px;
        margin-top: 0;
        padding-top: 0;
        a{
            text-decoration: none;
            color: black;
        }
        /* .rasmlar1{
            background-image: url("https://www.wow1day.com/sites/default/files/national-blog/W1D_Office_6.png");
        }
        .rasmlar2{
            background-color: green;
            background-image: url("https://media.istockphoto.com/photos/sharing-ideas-and-information-picture-id1074286338?k=20&m=1074286338&s=612x612&w=0&h=L5luOMQBohT4GZS1sPfJ8mamNbbynQjCXTggXMKr3lQ="); 
        } */
        .twleft{
            transition: 0.3s;
            padding: 20px;
            border-radius: 10px;
            color: white;
            font-weight: bold;
            font-size: 20px !important;
            width: 300px;
            height:200px;
            object-fit: cover;
            box-shadow: 3px 4px 10px black;

           /* &:hover{
               box-shadow: 3px 4px 10px black;
           } */
         
        }
    }
    .documentwords{
        margin: 20px;
        padding: 10px;
        text-align: center;
    }
    .btnKirish{
        border: 2px solid white;
        border-radius: 15px;
        color: white;
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
       box-shadow: 4px 5px 5px #575757;
       &:hover{
           transition: 0.3s;
        box-shadow: 7px 8px 4px #575757;

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
           width: 50px;
           height: 50px;
           object-fit: cover;
       }
   }
   .yashil{
    background-color: #8FFFA2;
   }

   .qizil{
    background-color: #FF8F8F;
   }
`;

export default Tables;