import styled from "styled-components";

const LogosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 30px;
  margin-top: 30px;
  padding: 20px 0;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 15px;
  }
`;

const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;

  img {
    max-width: 100%;
    max-height: 40px;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 30px;
  }
`;

function CustomerLogos({ logos }) {
  return (
    <LogosGrid>
      {logos.map((logo, index) => (
        <LogoItem key={logo.path || index}>
          <img src={logo.path} alt={logo.name || "고객사 로고"} />
        </LogoItem>
      ))}
    </LogosGrid>
  );
}

export default CustomerLogos;
