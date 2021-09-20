import styled from "styled-components";

const Tables = styled.div`
    table{
        padding: 10px;
        border: 1px solid black;
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
            background-image: url("http://tuitkf.uz/images/news/f4bcffa2b8.jpg"); 
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
                   justify-content: center;
                   align-items: center;
                   height: 100%;
               }
           }
           .tugmaB{
                   display: none;
               }
        }
    }

`;

export default Tables;