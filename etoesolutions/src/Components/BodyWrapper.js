import styled from "styled-components";

const MainContents = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 170px 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 140px 70px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 110px 30px;
  }
`;

const PageTitle = styled.div`
  display: block;
  margin-bottom: 30px;
  h2 {
    font-weight: 500;
    font-size: 45px;
    margin-bottom: 7px;
    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      font-size: 35px;
    }
  }
  h4 {
    font-weight: 400;
    font-size: 30px;
    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      font-size: 25px;
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
    gap: 15px;
  }
  span {
    font-size: 18px;
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
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
