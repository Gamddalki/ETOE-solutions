import styled from "styled-components";
import { memo } from "react";

const CardBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 3rem 0;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin: 2rem 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 1.5rem 0;
  }
`;

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 28px;
  gap: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 24px;
    gap: 18px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 20px;
    gap: 15px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-shrink: 0;
  align-items: center;
`;

const CardSubtitle = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.overlay};
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 20px;
  }
`;

const CardIcon = styled.div`
  width: 100%;
  height: 80px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;
  margin-bottom: 8px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 60px;
    height: 60px;
  }
`;

const CardText = styled.div`
  color: ${(props) => props.theme.colors.headerSubText};
  flex: 1;
  font-size: 18px;

  span {
    display: block;
    font-size: inherit;
    line-height: 1.7;
    margin-bottom: 10px;

    b {
      font-weight: 600;
      color: ${(props) => props.theme.colors.black};
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 15px;
  }
`;

function CardBoard({ cards }) {
  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <CardBoardContainer>
      {cards.map((card, index) => {
        const cardKey = card.id || card.title || `card-${index}`;

        return (
          <Card key={cardKey}>
            <CardContent>
              <CardHeader>
                {card.subtitle && <CardSubtitle>{card.subtitle}</CardSubtitle>}
                <CardTitle>{card.title}</CardTitle>
                {card.image && <CardIcon image={card.image} />}
              </CardHeader>
              <CardText>{card.content}</CardText>
            </CardContent>
          </Card>
        );
      })}
    </CardBoardContainer>
  );
}

export default memo(CardBoard);
