import styled from "styled-components";

const CardBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.headerText};
  margin-bottom: 1rem;
  text-align: center;
`;

const CardText = styled.div`
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.headerSubText};
  text-align: left;

  span {
    display: block;
    margin-bottom: 0.6rem;
  }
  b {
    font-weight: 500;
    font-size: 1rem;
  }
`;

function CardBoard({ cards }) {
  return (
    <CardBoardContainer>
      {cards.map((card, index) => (
        <Card key={index}>
          <CardImage image={card.image} />
          <CardContent>
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.content}</CardText>
          </CardContent>
        </Card>
      ))}
    </CardBoardContainer>
  );
}

export default CardBoard;
