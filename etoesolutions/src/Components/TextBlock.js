import styled from "styled-components";
import theme from "../theme";

const Texts = styled.div`
  display: block;
  margin-top: 55px;
  flex: 1;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-top: 35px;
  }

  h4 {
    font-weight: 400;
    font-size: 25px;
    margin-bottom: 15px;
    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  span {
    font-weight: 400;
    font-size: 17px;
    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      font-size: 15px;
    }
    a {
      font-weight: 500;
      &:hover {
        color: ${(props) => props.theme.colors.primary};
        text-decoration: underline;
      }
    }
  }
`;

function TextBlock({ blockTitle, children }) {
  return (
    <>
      <Texts>
        <h4>{blockTitle}</h4>
        {children}
      </Texts>
    </>
  );
}

export default TextBlock;
