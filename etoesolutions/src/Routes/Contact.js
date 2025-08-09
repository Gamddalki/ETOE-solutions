import styled from "styled-components";
import BodyWrapper from "../Components/BodyWrapper";
import TextBlock from "../Components/TextBlock";

const IframeWrapper = styled.div`
  flex: 1;
  width: 100%;
  iframe {
    width: 100%;
    height: 450px;
    border: 0;
    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      height: 350px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      height: 200px;
    }
  }
`;

function Contact() {
  return (
    <>
      <BodyWrapper pageTitle="컨택트" pageSubtitle="찾아오시는 길">
        <IframeWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.5561186022437!2d127.02641021564664!3d37.49479988599025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca131037150b3%3A0x8d2482c2d4cd8bf1!2z64yA7Jqw64-E7JSo7JeQ67mbMg!5e0!3m2!1sko!2skr!4v1645709539485!5m2!1sko!2skr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="headquarters-map"
          ></iframe>
        </IframeWrapper>
        <TextBlock blockTitle="Headquarters">
          <span>
            A) 06621 <br /> &nbsp;&nbsp;&nbsp;&nbsp; 서울시 서초구 강남대로 359
            대우도씨에빛2차 1901호, 1902호 <br />
            &nbsp;&nbsp;&nbsp;&nbsp; (강남역 5번 출구 앞)
            <br /> <br />
            T) 02-402-4222 <br /> <br />
            E) admin@etoe.co.kr <br />
          </span>
        </TextBlock>
      </BodyWrapper>
    </>
  );
}

export default Contact;
