import styled from "styled-components";

export const GloginW = styled.div`
  .App {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100%;
  }
  .loading{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading2{
      width: 110px !important;
      height: 110px !important;
    }
  }

.welcome button {
  display: block;
  padding: 10px 15px;
  border-radius: 8px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  background-size: 200%;
  background-position: 0%;
  transition: 0.4s;
  color: #FFF;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  border: none;
}

.welcome button:hover {
  background-position: 100%, 0%;
} 
`;