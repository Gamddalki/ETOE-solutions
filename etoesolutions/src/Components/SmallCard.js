import { memo } from "react";
import styled from "styled-components";

const SmallCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;
    margin: 2rem 0;
  }
`;

const SmallCard = styled.div`
  padding: 1.5rem;
  border-left: 10px solid ${(props) => props.theme.colors.secondary};
  border-right: 1px solid ${(props) => props.theme.colors.border};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  border-top: 1px solid ${(props) => props.theme.colors.border};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 1.2rem;
  }
`;

const SmallCardTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;

const SmallCardContent = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;
`;

function SmallCardBoard({ cards }) {
  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <SmallCardContainer>
      {cards.map((card, index) => (
        <SmallCard key={card.title || index}>
          <SmallCardTitle>{card.title}</SmallCardTitle>
          <SmallCardContent>{card.content}</SmallCardContent>
        </SmallCard>
      ))}
    </SmallCardContainer>
  );
}

export default memo(SmallCardBoard);
