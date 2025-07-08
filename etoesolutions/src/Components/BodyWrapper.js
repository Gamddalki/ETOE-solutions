import styled from "styled-components";

const MainContents = styled.div`
  min-height: 100vh;
  padding: 120px 250px;
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 50px 100px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 50px 70px;
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
      font-size: 33px;
    }
  }
  h4 {
    font-weight: 400;
    font-size: 30px;
    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      font-size: 22px;
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
