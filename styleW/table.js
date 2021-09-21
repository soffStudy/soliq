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
        min-height:70vh;
        width: 100% !important;
        a{
            text-decoration: none;
            color: black;
        }
        .rasmlar1{
            background-image: url("https://www.wow1day.com/sites/default/files/national-blog/W1D_Office_6.png");
        }
        .rasmlar2{
            background-image: url("https://media.istockphoto.com/photos/sharing-ideas-and-information-picture-id1074286338?k=20&m=1074286338&s=612x612&w=0&h=L5luOMQBohT4GZS1sPfJ8mamNbbynQjCXTggXMKr3lQ="); 
        }
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
           &:hover{
               box-shadow: 3px 4px 10px #858585;
               .sozlarB{
                   display: none;
                   transition: 0.3s;
               }
               .tugmaB{
                   display: flex;
                   justify-content: end;
                   align-items: end;
                   height: 100%;
               }
           }
           .tugmaB{
                   display: none;
               }
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
       background-image: linear-gradient(to right top, #70a2ed, #61bbf7, #67d2f9, #82e6f7, #a7f9f6);
       .rasmShaxs{
           width: 70px;
           height: 70px;
           object-fit: cover;
           margin: 5px;
           border-radius: 50%;
       
       }
       .personInf{
           color: black;
           a{
               color: black;
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
`;

export default Tables;