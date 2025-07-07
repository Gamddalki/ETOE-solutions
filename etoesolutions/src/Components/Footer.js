import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  bottom: 0;
  height: auto;
  background-color: ${(props) => props.theme.colors.footer};
  color: ${(props) => props.theme.colors.footerText};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 50px 200px;

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 50px;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 50px 20px;
  }
`;

const SpanDiv = styled.div`
  width: auto;
  span {
    display: block;
    text-align: right;
    font-size: 14px;
    &.company {
      font-weight: 500;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 100%;
    span {
      text-align: left;
      font-size: 13px;
    }
    &.leftSpan {
      margin-top: 20px;
      order: 2;
    }
    &.rightSpan {
      order: 1;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    &.leftSpan {
      margin-top: 15px;
    }
  }
`;

function Footer() {
  return (
    <FooterDiv>
      <SpanDiv className="leftSpan">
        <span>&copy; ETOE solutions co. LTD. All Rights Reserved.</span>
      </SpanDiv>
      <SpanDiv className="rightSpan">
        <span className="company">이투이솔루션즈(주)</span>
        <span>06621 서울시 서초구 강남대로 359, 도씨에빛 2차 1902호</span>
        <span>TEL: 02) 402-4222 FAX: 070-4134-2216</span>
      </SpanDiv>
    </FooterDiv>
  );
}

export default Footer;
