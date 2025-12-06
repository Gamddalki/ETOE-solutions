import { memo, useMemo } from "react";
import styled from "styled-components";
import BodyWrapper from "../Components/BodyWrapper";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import HighlightsGrid from "../Components/HighlightsGrid";

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 20px;
`;

const MapWrapper = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.border};

  iframe {
    width: 100%;
    height: 500px;
    border: 0;
    display: block;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      height: 400px;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      height: 300px;
    }
  }
`;

const CONTACT_ITEMS = [
  {
    icon: FiPhone,
    title: "전화",
    description: (
      <>
        <a href="tel:02-402-4222">02-402-4222</a>
      </>
    ),
  },
  {
    icon: FiMail,
    title: "이메일",
    description: (
      <>
        <a href="mailto:admin@etoe.co.kr">admin@etoe.co.kr</a>
      </>
    ),
  },
  {
    icon: FiMapPin,
    title: "주소",
    description: (
      <>
        서울시 서초구 강남대로 359
        <br />
        대우도씨에빛2차 1901호, 1902호
      </>
    ),
  },
];

function Contact() {
  const contactItems = useMemo(() => CONTACT_ITEMS, []);

  return (
    <BodyWrapper pageTitle="컨택트" pageSubtitle="이투이솔루션즈(주)">
      <ContactContainer>
        <HighlightsGrid items={contactItems} columns={3} />

        <MapWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.5561186022437!2d127.02641021564664!3d37.49479988599025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca131037150b3%3A0x8d2482c2d4cd8bf1!2z64yA7Jqw64-E7JSo7JeQ67mbMg!5e0!3m2!1sko!2skr!4v1645709539485!5m2!1sko!2skr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="headquarters-map"
          ></iframe>
        </MapWrapper>
      </ContactContainer>
    </BodyWrapper>
  );
}

export default memo(Contact);
