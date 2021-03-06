import styled from "styled-components";

const Components = styled.div`

    .active{
        background-color: red;
        color: red;
    }
 
.dashboardumumiy{
    min-height: 97vh;
    transition: 0.3s;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom:10px;
    max-width: 100%;
  
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0 !important;
        margin-top: 30px;
        li{
            padding: 5px;
            margin-bottom: 10px;
            
            a{
                color: white;
                text-decoration: none;
                font-weight: bold;
                font-size: 20px;
                position: relative;
                transition: 0.5s;
                
                /* &:hover{
                    border-bottom: 10px;
                } */
                    &::before {  
                    transform: scaleX(0);
                    }

                    &:hover::before {
                    transform: scaleX(1);
                    transform-origin: bottom left;
                    }

                    &::before {
                    content: " ";
                    display: block;
                    position: absolute;
                    top: 0; right: 0; bottom: 0; left: 0;
                    inset: 0 0 0 0;
                    background: hsl(200 100% 80%);
                    z-index: -1;
                    transition: transform .3s ease;
                    border-radius: 5px;
                    }
                    &:hover{
                        color: blue !important;
                    }
                }
            

        }
    }


    .gerb{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: block;
        transition: 0.3s;
    }

    .gerb2{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: block;
        transition: 0.3s;

    }
}

.dashboard{
    background-image: linear-gradient(to right top, #2b64b9, #2f80ca, #459bd7, #64b5e3, #88cfee);
}



.kl{
    padding: 5px 0;
    border-radius: 10px;
    background-color: white;
}

.locked{
  position: sticky;
  top: 10px;
  left: 10px;
}

.menuWord{
    display: none;
    transition: 0.3s;
}
.menuWord2{
    display: block;
    transition: 0.3s;
}

.footer{
    background: linear-gradient(-45deg, #040139, #0e0b4b, #3183CB, #040139);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    padding: 15px 0;
    margin-top: 10px;
}
/* animatsiya */

@keyframes gradient{
        0%{
            background-position: 0% 50%;
        }
        50%{
            background-position: 100% 50%;
        }
        100%{
            background-position: 0% 50%;
        }
    }

/* animatsiya */

.children{
    max-width: 800px !important;
}
.dashbordChildren{
    min-height: 90vh;
    overflow-x: hidden;
}
.ikonkalar{
    transition: 0.3s;
        font-size: 25px;
        display: inline-block;
        margin-right: 10px;
        &:hover{
            transform: translateY(-8px);
        }
        a{
            color: white;
        }
    }
    .btnDashboard{
        background-color: #003978;
        font-weight: bold;
        color: white;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .kunTun{
        display: flex;
        justify-content: center;
        align-items: center;
    }
.iii{
    background-color: black;
}
`;

export default Components