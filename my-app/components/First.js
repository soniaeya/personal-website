import React from 'react';
import styled from "styled-components";

const First = () => {
    return (
        <StyledPageContainer>
            <Content>
            <div style={{color: "white", fontSize: 120, padding: 50}}>Sonia's Website</div>
            </Content>
            <Youtube>
                <div style={{color: "black", fontSize: 40, padding: 20}}>
                    Hello!
                    <br/><br/>
                    My name is Sonia and I am a second year Computer Science Student, welcome to my website!
                </div>
            </Youtube>
        </StyledPageContainer>
    );
};
const StyledPageContainer = styled.div`
    background-color: lightblue;
      height: 800px;
      width: 1400px;
      postition: flex;
      margin-top: 100px;
      margin-left: auto;
      margin-right: auto;
      z-index: -1;
      order: 999;
  padding: 20px;
`
const Content = styled.div`
    top: 0px;
    background-color: lightpink;
      height: 500px;
      width: 500px;
  margin-left: 10%;
  margin-top: 8%;
      z-index: -1;
      order: 999;
`
const Youtube = styled.div`
  top: 15%;
  background-color: khaki;
  height: 750px;
  width: 550px;
  margin-top: 0%;
  margin-left: 40%;
  z-index: 1;
  order: 999;
  position: absolute;
`
export default First;