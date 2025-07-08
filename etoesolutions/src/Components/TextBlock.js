import styled from "styled-components";

const Texts = styled.div`
  display: block;
  margin-top: 10px;
  flex: 1;
  width: 100%;
  h4 {
    font-weight: 400;
    font-size: 25px;
    margin-bottom: 5px;
    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      font-size: 20px;
    }
  }
  span {
    font-weight: 400;
    font-size: 17px;
    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      font-size: 15px;
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
