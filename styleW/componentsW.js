import styled from "styled-components";

const Components = styled.div`

.dashboard{
    background-image: linear-gradient(to right top, #2b64b9, #2f80ca, #459bd7, #64b5e3, #88cfee);
    min-height: 100vh;
    transition: 0.3s;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    max-width: 100%;
    ul{
    list-style-type: none;
    margin: 0 !important;
    padding: 0 !important;
    li{
        padding: 5px;
        a{
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-size: 20px;
            &:hover{
                border-bottom: 10px;
            }
        }
    }
    }
    .gerb{
        width: 80px;
        height: 80px;
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
    background-color: #002A69;
}
.children{
    max-width: 800px !important;
}
.dashbordChildren{
    min-height: 90vh;
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


`;

export default Components