import React from 'react';
import styled from "styled-components";

const First = () => {
    return (
        <StyledPageContainer>
            <Content>
            <div style={{color: "white", fontSize: 100, padding: 50}}>Hi, I'm Sonia Li
            </div>


            </Content>
            <Youtube>
                <div style={{color: "grey", fontSize: 30, padding: 20}}>

                    As a computer science student from Montreal, I like to learn new things and meet new people.
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