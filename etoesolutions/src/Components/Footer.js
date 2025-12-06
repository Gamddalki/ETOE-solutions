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

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 50px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 50px 30px 30px 30px;
  }
`;

const SpanDiv = styled.div`
  width: auto;
  span {
    display: block;
    font-size: 14px;
    &.company {
      font-weight: 500;
    }
    &.leftSpan {
      text-align: left;
    }
    &.rightSpan {
      text-align: right;
    }
  }

  &.rightSpan {
    text-align: right;
    span {
      text-align: right;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    span {
      font-size: 13px;
      text-align: left;
    }
    &.leftSpan {
      margin-top: 20px;
      order: 2;
    }
    &.rightSpan {
      order: 1;
      text-align: left;
      span {
        text-align: left;
      }
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
