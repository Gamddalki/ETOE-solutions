import styled from "styled-components";

const CardBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    justify-items: center;
    max-width: 400px;
    margin: 2rem auto;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${(props) => props.theme.colors.shadow};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
  height: 500px;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px ${(props) => props.theme.colors.shadowHover};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 400px;
    width: 100%;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 2;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.7rem;
  color: white;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const CardHeader = styled.div`
  .card-title {
    font-size: 2.1rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.7rem;
      font-weight: 500;
      margin-bottom: 0.2rem;
    }
  }

  .card-subtitle {
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const CardText = styled.div`
  color: white;

  b {
    font-weight: 500;
    font-size: 1.2rem;
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  span {
    display: block;
    margin-bottom: 0.7rem;
    font-weight: 400;
    font-size: 0.9rem;
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

function CardBoard({ cards }) {
  return (
    <CardBoardContainer>
      {cards.map((card, index) => (
        <Card key={index}>
          <CardImage image={card.image} />
          <CardOverlay />
          <CardContent>
            <CardHeader>
              <div className="card-title">{card.title}</div>
              {card.subtitle && (
                <div className="card-subtitle">{card.subtitle}</div>
              )}
            </CardHeader>
            <CardText>{card.content}</CardText>
          </CardContent>
        </Card>
      ))}
    </CardBoardContainer>
  );
}

export default CardBoard;
