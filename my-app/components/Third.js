import React from 'react';
import styled from "styled-components";

const Third = () => {
    return (
        <StyledPageContainer>
            <Content>
                <div style={{color: "white", fontSize: 90}}>CUTEA</div>
            </Content>
            <Youtube>
                <div style={{color: "black", fontSize: 90}}>CUTEA</div>
            </Youtube>
        </StyledPageContainer>
    );
};
const StyledPageContainer = styled.div`
  background-color: Plum;
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
  background-color: lightpink;
  height: 500px;
  width: 500px;
  postition: relative;
  display: inline-block;
  z-index: -1;
  order: 999;
  margin-top: 100px;
`
const Youtube = styled.div`
  background-color: khaki;
  height: 700px;
  width: 500px;
  display: inline-block;
  postition: relative;
  margin-left: 15%;
  z-index: -1;
  order: 999;
`
export default Third;