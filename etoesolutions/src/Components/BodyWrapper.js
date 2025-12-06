import styled from "styled-components";

const MainContents = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 170px 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 140px 70px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 140px 30px;
  }
`;

const PageTitle = styled.div`
  display: block;
  margin-bottom: 15px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-bottom: 10px;
  }

  h2 {
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 7px;
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 35px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 30px;
    }
  }

  h4 {
    font-weight: 500;
    font-size: 30px;
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 25px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 20px;
    }
  }
`;

const PageContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    gap: 15px;
  }

  span {
    font-size: 18px;
    line-height: 1.7;
    text-align: justify;
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 15px;
    }
  }
`;

function BodyWrapper({ pageTitle, pageSubtitle, children }) {
  return (
    <>
      <MainContents>
        <PageTitle>
          <h2>{pageTitle}</h2>
          <h4>{pageSubtitle}</h4>
        </PageTitle>
        <PageContents>{children}</PageContents>
      </MainContents>
    </>
  );
}

export default BodyWrapper;
