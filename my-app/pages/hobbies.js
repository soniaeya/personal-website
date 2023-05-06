import React from 'react';
import styled from "styled-components";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";

const Hobbies = () => {
    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <StyledPageContainer>

                <Header></Header>
                <Content>
                    <h1> Hello World</h1>
                    <h1> Hello World</h1>
                    <h1> Hello World</h1>
                </Content>
            </StyledPageContainer>

        </div>
    );
};
const Header = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 80px;
  width: 500px;
  background-color: Lightblue;
`
const StyledPageContainer = styled.div`
    background-color: LemonChiffon;
      height: 800px;
      width: 1400px;
      display: block;
      postition: relative;
      margin-top: 80px;
      margin-left: auto;
      margin-right: auto;
      z-index: -1;
      order: 999;
    padding: 5px;
`
const Content = styled.div`
    background-color: lightpink;
      height: 600px;
      width: 1250px;
      display: block;
      postition: relative;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      z-index: -1;
      order: 999;

  padding: 20px;
`

export default Hobbies;