import React from "react";

import { Container, Header, Title, VideoContainer } from "./styles";
import logo from "../assets/images/logo.svg";

export const IndexPage = () => {
  return (
    <>
      <Container>
        <Header>
          <img src={logo} alt="nbc" />
          <h1>NBC entertainment</h1>
          <div></div>
        </Header>
        <Title>
          This is Us: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris fermentum sapien ut mi imperdiet ultricies.
        </Title>
        <VideoContainer>
          <iframe
            width="760"
            height="515"
            src="https://www.youtube.com/embed/-sUyGGkucNs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoContainer>
      </Container>
      <div
        class="arena-liveblog"
        data-publisher="lari"
        data-event="ifkz"
        data-version="2"
      ></div>
    </>
  );
};
