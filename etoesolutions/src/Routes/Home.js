import React from "react";
import styled from "styled-components";

const BackgroundVid = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  div {
    margin-top: 120px;
    h1 {
      text-align: center;
      font-size: 50px;
      font-weight: 500;
      color: ${(props) => props.theme.colors.header};
      @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
        font-size: 35px;
      }
      @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        font-size: 30px;
      }
    }
  }
`;

function Home() {
  return (
    <>
      <BackgroundVid>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/img/main-background.png"
        >
          <source src="/img/main-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div>
          <h1>미래에 대한 설레임을</h1>
          <h1>이투이와 함께</h1>
        </div>
      </BackgroundVid>
    </>
  );
}

export default Home;
