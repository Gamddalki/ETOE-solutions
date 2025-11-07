import styled from "styled-components";

const Texts = styled.div`
  display: block;
  margin-top: ${(props) => (props.firstBlock ? "0" : "50px")};
  flex: 1;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-top: ${(props) => (props.firstBlock ? "0" : "30px")};
  }

  h4 {
    font-weight: 500;
    font-size: 25px;
    margin-bottom: 15px;
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  span {
    font-weight: 400;
    font-size: 18px;
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 15px;
    }
    a {
      font-weight: 600;
      &:hover {
        color: ${(props) => props.theme.colors.primary};
        text-decoration: underline;
      }
    }
  }
`;

function TextBlock({ blockTitle, children, firstBlock = false }) {
  return (
    <>
      <Texts firstBlock={firstBlock}>
        <h4>{blockTitle}</h4>
        {children}
      </Texts>
    </>
  );
}

export default TextBlock;
