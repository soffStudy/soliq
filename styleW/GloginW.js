import styled from "styled-components";

export const GloginW = styled.div`
    .App {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 1100px;
    }

/* .welcome {
  width: 100%;
  max-width: 400px;
  background-color: #FFF;
  padding: 15px 30px;
}

.welcome h2 {
  color: #888;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
}

h2 span {
  color: #FE4880;
  font-weight: 700;
}*/

.welcome button {
  display: block;
  padding: 10px 15px;
  border-radius: 8px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  /* background-image: linear-gradient(to right, #FFCE00 50%, #FE4880); */
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