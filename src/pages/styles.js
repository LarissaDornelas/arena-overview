import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #102139;
  color: white;
  padding: 0 15px;
  position: fixed;
  top: 0;
  z-index: 9999;

  img {
    height: 30px;
  }

  h1 {
    font-weight: 400;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: black;
`;

export const Title = styled.h1`
  max-width: 800px;
  text-align: center;
  font-weight: 300;
`;
