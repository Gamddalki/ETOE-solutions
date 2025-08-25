import styled from "styled-components";

const SmallCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SmallCard = styled.div`
  background: ${(props) => props.bgColor};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px ${(props) => props.theme.colors.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px ${(props) => props.theme.colors.shadowHover};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 1.2rem;
  }
`;

const SmallCardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: white;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

const SmallCardContent = styled.div`
  color: white;
  font-size: 0.9rem;
  line-height: 1.5;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 0.85rem;
  }
`;

function SmallCardBoard({ cards, title }) {
  return (
    <>
      <SmallCardContainer>
        {cards.map((card, index) => (
          <SmallCard key={index} bgColor={card.bgColor}>
            <SmallCardTitle>{card.title}</SmallCardTitle>
            <SmallCardContent>{card.content}</SmallCardContent>
          </SmallCard>
        ))}
      </SmallCardContainer>
    </>
  );
}

export default SmallCardBoard;
