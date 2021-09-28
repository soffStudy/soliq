import styled from "styled-components";

const Components = styled.div`

.dashboard{
    background-image: linear-gradient(to right top, #2b64b9, #2f80ca, #459bd7, #64b5e3, #88cfee);
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
            &:hover{
                border-bottom: 10px;
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
    background-color: #002A69;
    padding: 15px 0;
    margin-top: 10px;
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
    .btnDashboard{
        background-color: #003978;
        font-weight: bold;
        color: white;
        margin-top: 20px;
        margin-bottom: 30px;
    }


`;

export default Components