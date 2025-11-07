import styled from "styled-components";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 15px;
  margin: 15px 15px 0px 0px;
  border: 1px solid ${(props) => props.theme.colors.headerSubText};
  border-radius: 999px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.headerSubText};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }

  font-size: 15px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 13px;
  }
`;

function ExternalLinkButton({ link, name }) {
  return (
    <Button href={link} target="_blank" rel="noopener noreferrer">
      {name}
      <FaArrowUpRightFromSquare />
    </Button>
  );
}

export default ExternalLinkButton;
